const tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff',
    name: 'NCBI RefSeq Genes',
    assemblyNames: ['GRCh38'],
    category: ['Genes'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz',
      },
      index: {
        location: {
          uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz.tbi',
        },
      },
    },
  },
  {
    type: 'AlignmentsTrack',
    trackId: 'NA12878.alt_bwamem_GRCh38DH.20150826.CEU.exome',
    name: 'NA12878 Exome',
    assemblyNames: ['GRCh38'],
    category: ['1000 Genomes', 'Alignments'],
    adapter: {
      type: 'CramAdapter',
      cramLocation: {
        uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/alignments/NA12878/NA12878.alt_bwamem_GRCh38DH.20150826.CEU.exome.cram',
      },
      craiLocation: {
        uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/alignments/NA12878/NA12878.alt_bwamem_GRCh38DH.20150826.CEU.exome.cram.crai',
      },
      sequenceAdapter: {
        type: 'BgzipFastaAdapter',
        fastaLocation: {
          uri: 'https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz',
        },
        faiLocation: {
          uri: 'https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz.fai',
        },
        gziLocation: {
          uri: 'https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz.gzi',
        },
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'ALL.wgs.shapeit2_integrated_snvindels_v2a.GRCh38.27022019.sites.vcf',
    name: '1000 Genomes Variant Calls',
    assemblyNames: ['GRCh38'],
    category: ['1000 Genomes', 'Variants'],
    adapter: {
      type: 'VcfTabixAdapter',
      vcfGzLocation: {
        uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/variants/ALL.wgs.shapeit2_integrated_snvindels_v2a.GRCh38.27022019.sites.vcf.gz',
      },
      index: {
        location: {
          uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/variants/ALL.wgs.shapeit2_integrated_snvindels_v2a.GRCh38.27022019.sites.vcf.gz.tbi',
        },
      },
    },
  },
  {
    type: 'MultiQuantitativeTrack',
    trackId: 'microarray_multi',
    name: 'MultiWig',
    category: ['ENCODE bigWigs'],
    assemblyNames: ['GRCh38'],
    adapter: {
      type: 'MultiWiggleAdapter',
      bigWigs: [
        'https://www.encodeproject.org/files/ENCFF055ZII/@@download/ENCFF055ZII.bigWig',
        'https://www.encodeproject.org/files/ENCFF826HEW/@@download/ENCFF826HEW.bigWig',
        'https://www.encodeproject.org/files/ENCFF858LIM/@@download/ENCFF858LIM.bigWig',
        'https://www.encodeproject.org/files/ENCFF425TNW/@@download/ENCFF425TNW.bigWig',
        'https://www.encodeproject.org/files/ENCFF207RBY/@@download/ENCFF207RBY.bigWig',
        'https://www.encodeproject.org/files/ENCFF289CTN/@@download/ENCFF289CTN.bigWig',
        'https://www.encodeproject.org/files/ENCFF884IEG/@@download/ENCFF884IEG.bigWig',
        'https://www.encodeproject.org/files/ENCFF495SBQ/@@download/ENCFF495SBQ.bigWig',
        'https://www.encodeproject.org/files/ENCFF959EZF/@@download/ENCFF959EZF.bigWig',
        'https://www.encodeproject.org/files/ENCFF926YZX/@@download/ENCFF926YZX.bigWig',
        'https://www.encodeproject.org/files/ENCFF269CHA/@@download/ENCFF269CHA.bigWig',
        'https://www.encodeproject.org/files/ENCFF857KTJ/@@download/ENCFF857KTJ.bigWig',
        'https://www.encodeproject.org/files/ENCFF109KCQ/@@download/ENCFF109KCQ.bigWig',
        'https://www.encodeproject.org/files/ENCFF942TZX/@@download/ENCFF942TZX.bigWig',
        'https://www.encodeproject.org/files/ENCFF140HPM/@@download/ENCFF140HPM.bigWig',
        'https://www.encodeproject.org/files/ENCFF305JRR/@@download/ENCFF305JRR.bigWig',
        'https://www.encodeproject.org/files/ENCFF739FDJ/@@download/ENCFF739FDJ.bigWig',
        'https://www.encodeproject.org/files/ENCFF518OJP/@@download/ENCFF518OJP.bigWig',
        'https://www.encodeproject.org/files/ENCFF810HHS/@@download/ENCFF810HHS.bigWig',
        'https://www.encodeproject.org/files/ENCFF939JSB/@@download/ENCFF939JSB.bigWig',
        'https://www.encodeproject.org/files/ENCFF041TAK/@@download/ENCFF041TAK.bigWig',
      ],
    },
  },
]

export default tracks
