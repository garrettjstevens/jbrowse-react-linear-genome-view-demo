import React, { useState, useEffect } from 'react'
import 'fontsource-roboto'
import {
  createViewState,
  createJBrowseTheme,
  JBrowseLinearGenomeView,
  ThemeProvider,
} from '@jbrowse/react-linear-genome-view'

import assembly from './assembly'
import tracks from './tracks'

const theme = createJBrowseTheme()

const defaultSession = {
  name: 'this session',
  view: {
    id: 'linearGenomeView',
    type: 'LinearGenomeView',
    tracks: [
      {
        id: '7PWx6ki1_',
        type: 'ReferenceSequenceTrack',
        configuration: 'GRCh38-ReferenceSequenceTrack',
        displays: [
          {
            id: 'pa_7lx6FDh',
            type: 'LinearReferenceSequenceDisplay',
            height: 210,
            configuration:
              'GRCh38-ReferenceSequenceTrack-LinearReferenceSequenceDisplay',
          },
        ],
      },
      {
        id: 'KHwe41KXk',
        type: 'AlignmentsTrack',
        configuration: 'NA12878.alt_bwamem_GRCh38DH.20150826.CEU.exome',
        displays: [
          {
            id: '_-kwYVczT8',
            type: 'LinearAlignmentsDisplay',
            PileupDisplay: {
              id: '1HTk32IDZJ',
              type: 'LinearPileupDisplay',
              height: 100,
              configuration: {
                type: 'LinearPileupDisplay',
                displayId:
                  'NA12878.alt_bwamem_GRCh38DH.20150826.CEU.exome-LinearAlignmentsDisplay_pileup_xyz',
              },
            },
            SNPCoverageDisplay: {
              id: 'ZBXRXmuDrc',
              type: 'LinearSNPCoverageDisplay',
              height: 45,
              configuration: {
                type: 'LinearSNPCoverageDisplay',
                displayId:
                  'NA12878.alt_bwamem_GRCh38DH.20150826.CEU.exome-LinearAlignmentsDisplay_snpcoverage_xyz',
              },
            },
            configuration:
              'NA12878.alt_bwamem_GRCh38DH.20150826.CEU.exome-LinearAlignmentsDisplay',
            height: 250,
          },
        ],
      },
    ],
  },
}

function View() {
  const [viewState, setViewState] =
    useState<ReturnType<typeof createViewState>>()
  const [patches, setPatches] = useState('')
  const [stateSnapshot, setStateSnapshot] = useState('')

  useEffect(() => {
    const state = createViewState({
      assembly,
      tracks,
      location: '10:29,838,655..29,838,737',
      onChange: (patch) => {
        setPatches((previous) => previous + JSON.stringify(patch) + '\n')
      },
      defaultSession,
    })
    setViewState(state)
  }, [])

  if (!viewState) {
    return null
  }

  return (
    <>
      <h1>JBrowse 2 React Linear Genome View Demo</h1>
      <ThemeProvider theme={theme}>
        <JBrowseLinearGenomeView viewState={viewState} />
      </ThemeProvider>
      <h3>Control the view</h3>
      <div>
        <p>
          This is an example of controlling the view from other elements on the
          page. Clicking on a button will navigate the view to the location of
          that gene.
        </p>
        <button
          onClick={() => {
            viewState.session.view.navToLocString('10:94762681..94855547')
          }}
        >
          CYP2C19
        </button>
        <button
          onClick={() => {
            viewState.session.view.navToLocString('13:32315086..32400266')
          }}
        >
          BRCA2
        </button>
      </div>
      <h3>See the state</h3>
      <div>
        <p>
          The button below will show you the current session, which includes
          things like what region the view is showing and which tracks are open.
          This session JSON object can be used in the{' '}
          <code>defaultSession</code> of <code>createViewState</code>.
        </p>
        <button
          onClick={() => {
            setStateSnapshot(JSON.stringify(viewState.session, undefined, 2))
          }}
        >
          Show session
        </button>
      </div>
      <textarea value={stateSnapshot} readOnly rows={20} cols={80} />
      <h3>React to the view</h3>
      <p>
        Using <code>onChange</code> in <code>createViewState</code>, you can
        observe what is happening in the view and react to it. The changes in
        the state of the view are emitted as{' '}
        <a href="http://jsonpatch.com/" target="_blank" rel="noreferrer">
          JSON patches
        </a>
        . The patches for the component on this page are shown below.
      </p>
      <textarea value={patches} readOnly rows={5} cols={80} wrap="off" />
    </>
  )
}

export default View
