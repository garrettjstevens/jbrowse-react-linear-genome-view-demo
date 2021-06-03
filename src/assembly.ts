const assembly = {
  name: 'GRCh38',
  aliases: ['hg38'],
  sequence: {
    type: 'ReferenceSequenceTrack',
    trackId: 'GRCh38-ReferenceSequenceTrack',
    adapter: {
      type: 'BgzipFastaAdapter',
      fastaLocation: {
        uri: 'https://ftp.ensembl.org/pub/release-100/fasta/homo_sapiens/dna_index/Homo_sapiens.GRCh38.dna.toplevel.fa.gz',
      },
      faiLocation: {
        uri: 'https://ftp.ensembl.org/pub/release-100/fasta/homo_sapiens/dna_index/Homo_sapiens.GRCh38.dna.toplevel.fa.gz.fai',
      },
      gziLocation: {
        uri: 'https://ftp.ensembl.org/pub/release-100/fasta/homo_sapiens/dna_index/Homo_sapiens.GRCh38.dna.toplevel.fa.gz.gzi',
      },
    },
    displays: [
      {
        type: 'LinearReferenceSequenceDisplay',
        displayId:
          'GRCh38-ReferenceSequenceTrack-LinearReferenceSequenceDisplay',
        renderer: {
          type: 'DivSequenceRenderer',
        },
      },
    ],
  },
  refNameAliases: {
    adapter: {
      type: 'RefNameAliasAdapter',
      location: {
        uri: '/jbrowse-react-linear-genome-view-demo/GRCh38.aliases.txt',
      },
    },
  },
}

export default assembly
