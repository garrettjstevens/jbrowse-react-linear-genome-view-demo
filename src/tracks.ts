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
          uri: 'http://ftp.ensembl.org/pub/release-100/fasta/homo_sapiens/dna_index/Homo_sapiens.GRCh38.dna.toplevel.fa.gz',
        },
        faiLocation: {
          uri: 'http://ftp.ensembl.org/pub/release-100/fasta/homo_sapiens/dna_index/Homo_sapiens.GRCh38.dna.toplevel.fa.gz.fai',
        },
        gziLocation: {
          uri: 'http://ftp.ensembl.org/pub/release-100/fasta/homo_sapiens/dna_index/Homo_sapiens.GRCh38.dna.toplevel.fa.gz.gzi',
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
]

export default tracks
