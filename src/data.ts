export const cvData = {
  name: "Saqib Ali",
  title: "Plant Pathologist & Bioinformatician",
  contact: {
    phone: "+92-347-1158-223",
    email: "saqibalilogan223@gmail.com",
    linkedin: "saqibalilogan",
    wechat: "saqibali01",
    location: "Chiniot, Punjab, Pakistan"
  },
  about: "<strong>Plant Pathologist and Bioinformatician (M.Sc. Hons.)</strong> specializing in comparative genomics, phylogenomics, and molecular evolution.<br/><br/>Combines <strong>advanced wet-lab skills</strong> (molecular diagnostics, SSR genotyping, marker-assisted selection, stress screening) with <strong>computational expertise</strong> in genome-wide analysis, synteny mapping, protein structure prediction, and population genetics.<br/><br/>Proficient in building integrated <strong>R/Python workflows</strong> to solve complex research problems in plant-pathogen interactions and stress-responsive gene discovery.",
  education: [
    {
      degree: "M.Sc. (Hons.) Agriculture Plant Pathology",
      institution: "University of Agriculture Faisalabad",
      institutionUrl: "https://web.uaf.edu.pk/",
      location: "Faisalabad, Pakistan",
      period: "Sep 2022 – Sep 2024",
      cgpa: "3.55/4.00"
    },
    {
      degree: "B.Sc. (Hons.) Agriculture Plant Pathology",
      institution: "University of Agriculture Faisalabad",
      institutionUrl: "https://web.uaf.edu.pk/",
      location: "Faisalabad, Pakistan",
      period: "Aug 2018 – Jul 2022",
      cgpa: "3.64/4.00"
    }
  ],
  experience: [
    {
      title: "Research Fellow",
      organization: "Nuclear Institute for Agriculture and Biology - (PAEC-IAEC)",
      location: "Faisalabad, Pakistan",
      period: "Sep 2025 – Present",
      supervisor: "Dr. Muhammad Rashid",
      supervisorUrl: "https://www.researchgate.net/profile/Muhammad-Rashid-66",
      certificateUrl: "https://drive.google.com/file/d/14XRTN_t0_nuX0CChL30IpVVl99rK-1Jl/view?usp=sharing",
      projects: [
        {
          name: "Project 1: In-Silico Analysis of WRKY Genes in Rice Subspecies (Sep–Oct 2025)",
          details: [
            "Identified and characterized 252 WRKY transcription factors across O. sativa indica, japonica, and O. glaberrima using PlantTFDB and SMART databases",
            "Constructed maximum likelihood phylogenetic trees (ClustalX, MEGA12) to classify genes into evolutionary subgroups based on conserved domain architecture",
            "Analyzed spatio-temporal expression patterns across 42 tissue types using RiceXPro and constructed co-expression networks with RiceFRIEND to identify functional modules",
            "Generated publication-quality visualizations using R (gplots, heatmap.2, ComplexHeatmap) and TBtools for multi-dimensional expression profiling"
          ]
        },
        {
          name: "Project 2: Comparative Genomics Across Seven Cereal Genomes (Nov 2025–Jan 2026)",
          details: [
            "Conducted genome-wide identification of 547 WRKY genes using HMMER and BLAST with redundancy filtering (CD-HIT); performed multiple sequence alignment (MAFFT) and phylogenetic reconstruction (iTOL)",
            "Characterized gene structure, conserved motifs (MEME Suite), and protein domains (InterProScan) to establish evolutionary relationships across cereals",
            "Executed comparative synteny analysis using MCScanX and Circa, mapping 700+ orthologous gene pairs and visualizing chromosomal relationships with TBtools and circlize",
            "Calculated evolutionary selection pressure (KaKs_Calculator 2.0), demonstrating strong purifying selection (Ka/Ks = 0.08–0.12) across WRKY gene families",
            "Applied multivariate statistical methods (PCA, t-SNE) and codon usage bias analysis (seqinr) to compositional datasets; developed reproducible analytical workflows using Python (BioPython) and R for statistical testing and high-dimensional visualization"
          ]
        },
        {
          name: "Wet Laboratory & Physiological Screening (Sep–Oct 2025)",
          details: [
            "Conducted comprehensive stress resistance screening in rice germplasm using physiological (SPAD, IRGA, porometer, osmometer, pressure chamber) and biochemical assays (MDA, POD, EC, ion quantification via spectrophotometry and flame photometry)",
            "Applied molecular techniques for genetic characterization: DNA quantification, PCR, gel electrophoresis, SSR marker genotyping, marker-assisted selection (MAS), and primer design (Primer3)",
            "Performed plant pathology assays including inoculum preparation, pathogen staining, varietal screening, and plant–pathogen interaction studies."
          ]
        }
      ]
    },
    {
      title: "Agriculture Officer Extension (Intern)",
      organization: "Department of Agriculture Extension, Government of Punjab",
      location: "Chiniot, Pakistan",
      period: "Sep 2024 – Sep 2025",
      certificateUrl: "https://drive.google.com/file/d/1S_3_cCsmE1y5IlFfzos1ZMRCgpGyKB9F/view?usp=sharing",
      details: [
        "Provided technical advisory support to 1,500+ farmers on integrated pest and disease management, translating research-based recommendations into practical, cost-effective control strategies to improve crop yields.",
        "Conducted field-based pest scouting and crop health assessments through regular farmer visits, diagnosing disease/pest issues and providing targeted intervention recommendations.",
        "Assisted in seed and agrochemical quality assessments to ensure product efficacy and regulatory compliance, supporting farmer access to certified inputs."
      ]
    },
    {
      title: "Research & Knowledge Management Intern",
      organization: "World Agriculture Forum",
      location: "Remote",
      period: "May 2025 – July 2025",
      certificateUrl: "https://drive.google.com/file/d/1Op6vncaxaS6arzUaQQqLErU3x19qTcJE/view?usp=sharing",
      details: [
        "Collaborated with policy research team to analyze global agricultural trends and compile technical reports promoting sustainable agricultural practices and stakeholder dialogue."
      ]
    },
    {
      title: "Research Intern",
      organization: "PepsiCo Roshan Kal for Pakistan",
      location: "Faisalabad, Pakistan",
      period: "Jul 2024 – Aug 2024",
      certificateUrl: "https://drive.google.com/file/d/17638KT4E9XSE3il6wIrqHilzaScoLq-d/view?usp=sharing",
      details: [
        "Contributed to Bonsucro-certified model farm development by validating sustainable agriculture practices and conducting supply chain sustainability assessments in collaboration with industry and academic partners."
      ]
    },
    {
      title: "Postgraduate Thesis Research",
      organization: "Department of Plant Pathology, University of Agriculture Faisalabad",
      location: "Faisalabad, Pakistan",
      period: "Sept 2022 – Jul 2024",
      supervisor: "Prof. Dr. Sajid Aleem Khan",
      supervisorUrl: "https://web.uaf.edu.pk/FacultyProfile/Profile/125",
      thesis: "Incidence of Meloidogyne graminicola in Maize Crops and Its Integrated Management",
      certificateUrl: "#",
      details: [
        "Conducted field surveys and greenhouse experiments to assess root-knot nematode incidence in maize, implementing integrated management strategies through biological, chemical, and cultural practices in replicated field trials",
        "Developed proficiency in nematology and plant pathology techniques including nematode extraction and identification, pathogen isolation and culturing, media preparation, and Koch's postulates validation",
        "Collaborated on field experiments for cotton Verticillium wilt, vegetable crop nematode screening (carrot, grapevine), and cereal pathology trials (rice, wheat), contributing to experimental design, data collection, and statistical analysis.",
        "Applied novel agricultural technologies including laser-assisted nanoparticle treatments on rice and wheat for disease management and crop improvement research.",
        "Mentored undergraduate students through laboratory demonstrations and training in plant pathology techniques and experimental protocols."
      ]
    },
    {
      title: "Research Intern",
      organization: "Vegetable Research Institute, Ayub Agricultural Research Institute",
      location: "Faisalabad, Pakistan",
      period: "Feb 2022 – May 2022",
      certificateUrl: "https://drive.google.com/file/d/1k-T7AZJ7-r3PVWIZ6iuevXr8NTUSEZ6C/view?usp=sharing",
      details: [
        "Designed and conducted field trials in walk-in tunnels to study disease prevalence and fungicide efficacy in vegetable crops (tomatoes, cucumbers, watermelons, onions, garlic), with emphasis on tomato early blight and grey mold management.",
        "Performed plant pathology diagnostics including pathogen isolation, ELISA-based virus identification, and PCR-based detection for bacterial and nematode pathogens.",
        "Contributed disease resistance data to vegetable and cereal breeding programs through statistical analysis (RStudio, Python), supporting crop improvement strategies."
      ]
    }
  ],
  publications: {
    summary: "8 peer-reviewed articles (6 first author), 4 conference presentations",
    submitted: [
      { text: "Ali, S. (2026). Evolutionary Origins and Structural Mechanism of V2-Mediated Host Immunity Suppression in Soybean Stay-Green Associated Virus (SoSGV). Submitted to Archives of Virology (Springer Nature).", pdfUrl: "#" },
      { text: "Ali, S. (2026). Systematic Characterization of Glycine max IQD Genes Reveals Insights into Drought Stress Adaptation and Hormonal Regulation of Plant Architecture. Submitted to 3 Biotech (Springer Nature).", pdfUrl: "#" },
      { text: "Ali, S., Hanjra, Z., Saeed, M., Fatima, T., Khalil, S., Iltaf, B., & Rashid, M. (2025). In-silico analysis of WRKY transcription factors (WRKY) gene family in rice. Submitted to BMC Plant Biology.", pdfUrl: "https://drive.google.com/file/d/1hvu9mAr3NKo9R_vdEHQMbZRJdTPizR2A/view?usp=sharing" },
      { text: "Hanjra, Z., Ali, S., Fatima, T., Saeed, M., Khalil, S., & Rashid, M. (2026). High-resolution comparative genomics and compositional analysis of WRKY transcription factors across seven cereal and model plant genomes. Submitted to BMC Plant Biology.", pdfUrl: "https://drive.google.com/file/d/1SNoaF7h_k36Bh-VJJWGGI8VrhyyE_Zqx/view?usp=sharing" }
    ],
    published: [
      { text: "Ali, S., Khan, S. A., Abbas, H., Khadim, U., Aslam, A. & Anwaar, M. (2025). Incidence of Meloidogyne Graminicola on Maize and Its Integrated Management. Accepted in Pakistan Journal of Zoology.", pdfUrl: "https://drive.google.com/file/d/1PMEwPIcezsJeZNo-jJc00ADV5bfS7GJx/view?usp=sharing" },
      { text: "Tufail, M. M., Abbas, H., Khadim, U., Bashir, M. R., Kamran, M., Khan, S. A., Zafar, M., Shahbaz, M. U., ul Haq, M. E., & Ali, S. (2024). Management of Macrophomina phaseolina infecting sesame germplasm. Journal of Phytobiology, 4(1), 9–17.", pdfUrl: "#" }
    ],
    reviews: [
      { text: "Ali, S., Mithal, U., Bibi, J., Hanif, A., Zohaib, M., Asghar, J., ... & Sohail, A. (2025). Revolutionizing Cotton Leaf Curl Disease Detection: CRISPR-Based Diagnostics for Rapid, Field-Deployable Solutions. Planta Animalia, 4(4), 347-362.", pdfUrl: "#" },
      { text: "Ali, S., Anwaar, M., Khadim, U., & Bakhsh, B. P. (2025). CRISPR-based biosensors for plant disease diagnostics: Innovations, applications, and future prospects. Annual Methodological Archive Research Review, 3(8).", pdfUrl: "#" }
    ],
    conferences: [
      { text: "Ali, S. (2025). Multi-Omics and Machine Learning for Predicting Biocontrol Efficacy under Climate-Driven Pathogen Shifts. [Abstract] 9th ICCPS PMAS UAAR, Pakistan", pdfUrl: "#" },
      { text: "Aslam, A., Khan, S. A., Ali, S., Abbas, H., Anwar, M., & Ul Haq, U. (2023). Plant growth-promoting rhizobacteria as a biocontrol tool for root-knot nematode killing in lab [Abstract]. 8th ICCPS IUB, Pakistan.", pdfUrl: "#" },
      { text: "Ali, S., Khan, S. A., Abbas, H., Aslam, A., Abbas, W., & Khadim, U. (2023). Evaluation of resistant sources of tomato against early blight under natural field conditions and its management through newly introduced chemicals [Abstract]—8th ICCPS IUB, Pakistan.", pdfUrl: "#" },
      { text: "Ali, S. (2025). Harnessing Host-Induced and Exogenous RNAi for Precision Nematode Control. [Abstract] VIRTUAL NEMATOLOGY CONFERENCE 2025", pdfUrl: "https://drive.google.com/file/d/1JtwWr3s0PDIMVvCwSUyenm9WfIB7CiVN/view?usp=sharing" }
    ]
  },
  professionalService: [
    "Ad-hoc Reviewer, Journal of Plant Diseases and Protection | Springer Nature (2025).",
    "Ad-hoc Reviewer, Journal of Advances in Biology & Biotechnology (2025)."
  ],
  honors: [
    {
      title: "Ehsaas Undergraduate Scholarship",
      organization: "HEC Pakistan",
      location: "Faisalabad, Pakistan",
      period: "Sep 2019 – Jul 2022",
      certificateUrl: "#"
    },
    {
      title: "PEEF Scholarship",
      organization: "Punjab Educational Endowment Fund",
      location: "Faisalabad, Pakistan",
      period: "Sep 2016 – Jun 2018",
      certificateUrl: "https://drive.google.com/file/d/1vZkw5w3QOklmocmlnXFDtsouMTCpcHnO/view?usp=sharing"
    }
  ],
  certifications: [
    {
      title: "BONSUCRO Sugarcane Sustainability Training Workshop",
      organization: "PepsiCo Pakistan",
      location: "Lahore, Pakistan",
      period: "Aug 2024",
      certificateUrl: "https://drive.google.com/file/d/1tbeRnSPBed-8rdfZdN0rJ-IcpzxOoHdL/view?usp=sharing"
    },
    {
      title: "International Conference Climate-Smart Agriculture for Food Security",
      organization: "University of Poonch Rawalakot",
      location: "Azad Jamu Kashmir",
      period: "July 2024",
      certificateUrl: "https://drive.google.com/file/d/103W22-vA9QEfb5AQ5YLHAdUvkISUKjaS/view?usp=sharing"
    },
    {
      title: "Python for Everybody Specialization",
      organization: "University of Michigan (via Coursera)",
      period: "2025",
      certificateUrl: "https://coursera.org/share/6dff9895f8e78c384afcddf6e7557d7a"
    },
    {
      title: "Bioinformatic Specialization",
      organization: "University of California, San Diego (via Coursera)",
      period: "2025",
      certificateUrl: "https://coursera.org/share/9513e9ea12b12f5d664a21e8d88a0ad5"
    },
    {
      title: "Data Visualization & Dashboarding with R",
      organization: "Johns Hopkins University (via Coursera)",
      period: "2025",
      certificateUrl: "https://coursera.org/share/b6638b578f0563096d1580cba4f75ead"
    },
    {
      title: "Geographic Information Systems (GIS)",
      organization: "University of California, Davis (via Coursera)",
      period: "2025",
      certificateUrl: "https://coursera.org/share/b095d97a51149e4ff173d526c4fdf0cc"
    },
    {
      title: "Plant Bioinformatic Methods Specialization",
      organization: "University of Toronto (via Coursera)",
      period: "2025",
      certificateUrl: "https://coursera.org/share/1becc6d99aa5f81e554c4d2af9bbc5d9"
    },
    {
      title: "Agroforestry Specialization",
      organization: "University of Florida (via Coursera)",
      period: "2025",
      certificateUrl: "https://coursera.org/share/e5ad538e594e1f67e5374fdd92438ba7"
    },
    {
      title: "Agribusiness & Sustainable Food Production Economics Specialization",
      organization: "University of Illinois Urbana Champaign (via Coursera)",
      period: "2025",
      certificateUrl: "https://coursera.org/share/f17aa3949359c0018a2136455a9df3ee"
    },
    {
      title: "Agriculture, Economics and Nature",
      organization: "University of Western Australia (via Coursera)",
      period: "2025",
      certificateUrl: "https://coursera.org/share/8fa1a2bc7e9ee47610adee87ccc8994e"
    },
    {
      title: "DNA Decoded",
      organization: "McMaster University (via Coursera)",
      period: "2025",
      certificateUrl: "https://coursera.org/share/1c6c74e6ec718cbc4778bc09ae4782a3"
    }
  ],
  courses: [
    {
      "name": "Bioinformatics I: Finding Hidden Messages in DNA",
      "provider": "UC San Diego",
      "certificateUrl": "#",
      "grade": "97.00%",
      "spec": "Bioinformatics"
    },
    {
      "name": "Bioinformatics II: Genome Sequencing",
      "provider": "UC San Diego",
      "certificateUrl": "#",
      "grade": "97.89%",
      "spec": "Bioinformatics"
    },
    {
      "name": "Bioinformatics III: Comparing Genes, Proteins, and Genomes",
      "provider": "UC San Diego",
      "certificateUrl": "#",
      "grade": "100%",
      "spec": "Bioinformatics"
    },
    {
      "name": "Bioinformatics IV: Molecular Evolution",
      "provider": "UC San Diego",
      "certificateUrl": "#",
      "grade": "97.60%",
      "spec": "Bioinformatics"
    },
    {
      "name": "Bioinformatics V: Genomic Data Science and Clustering",
      "provider": "UC San Diego",
      "certificateUrl": "#",
      "grade": "88.00%",
      "spec": "Bioinformatics"
    },
    {
      "name": "Bioinformatics VI: Finding Mutations in DNA and Proteins",
      "provider": "UC San Diego",
      "certificateUrl": "#",
      "grade": "97.60%",
      "spec": "Bioinformatics"
    },
    {
      "name": "Bioinformatics Capstone: Big Data in Biology",
      "provider": "UC San Diego",
      "certificateUrl": "#",
      "grade": "95.57%",
      "spec": "Bioinformatics"
    },
    {
      "name": "Bioinformatic Methods I",
      "provider": "Univ. of Toronto",
      "certificateUrl": "#",
      "grade": "91.50%",
      "spec": "Plant Bioinformatic Methods"
    },
    {
      "name": "Bioinformatic Methods II",
      "provider": "Univ. of Toronto",
      "certificateUrl": "#",
      "grade": "94.50%",
      "spec": "Plant Bioinformatic Methods"
    },
    {
      "name": "Plant Bioinformatics",
      "provider": "Univ. of Toronto",
      "certificateUrl": "#",
      "grade": "100%",
      "spec": "Plant Bioinformatic Methods"
    },
    {
      "name": "Plant Bioinformatics Capstone",
      "provider": "Univ. of Toronto",
      "certificateUrl": "#",
      "grade": "100%",
      "spec": "Plant Bioinformatic Methods"
    },
    {
      "name": "Agroforestry I: Principles and Practices",
      "provider": "Univ. of Florida",
      "certificateUrl": "#",
      "grade": "100%",
      "spec": "Agroforestry"
    },
    {
      "name": "Agroforestry II: Major Systems of the World",
      "provider": "Univ. of Florida",
      "certificateUrl": "#",
      "grade": "100%",
      "spec": "Agroforestry"
    },
    {
      "name": "Agroforestry III: Principles of Plant and Soil Management",
      "provider": "Univ. of Florida",
      "certificateUrl": "#",
      "grade": "100%",
      "spec": "Agroforestry"
    },
    {
      "name": "Agroforestry IV: Climate, Carbon Storage and Agroforestry",
      "provider": "Univ. of Florida",
      "certificateUrl": "#",
      "grade": "100%",
      "spec": "Agroforestry"
    },
    {
      "name": "Agroforestry V: Ecosystem Services, Food and Sustainability",
      "provider": "Univ. of Florida",
      "certificateUrl": "#",
      "grade": "100%",
      "spec": "Agroforestry"
    },
    {
      "name": "Supply Chain of Agriculture",
      "provider": "Univ. of Illinois",
      "certificateUrl": "#",
      "grade": "91.50%",
      "spec": "Agribusiness & Sustainable Food"
    },
    {
      "name": "Agriculture as an Asset Class",
      "provider": "Univ. of Illinois",
      "certificateUrl": "#",
      "grade": "93.75%",
      "spec": "Agribusiness & Sustainable Food"
    },
    {
      "name": "Strategies and Tools to Mitigate Agricultural Risk",
      "provider": "Univ. of Illinois",
      "certificateUrl": "#",
      "grade": "95.50%",
      "spec": "Agribusiness & Sustainable Food"
    },
    {
      "name": "Modern Issues in Food & Agriculture",
      "provider": "Univ. of Illinois",
      "certificateUrl": "#",
      "grade": "96.00%",
      "spec": "Agribusiness & Sustainable Food"
    },
    {
      "name": "Risks to Crop Production in Agriculture",
      "provider": "Univ. of Illinois",
      "certificateUrl": "#",
      "grade": "95.50%",
      "spec": "Agribusiness & Sustainable Food"
    },
    {
      "name": "Issues in Supply Chain Management",
      "provider": "Univ. of Illinois",
      "certificateUrl": "#",
      "grade": "88.00%",
      "spec": "Agribusiness & Sustainable Food"
    },
    {
      "name": "Pest & Disease Management",
      "provider": "Univ. of Illinois",
      "certificateUrl": "#",
      "grade": "93.33%",
      "spec": "Agribusiness & Sustainable Food"
    },
    {
      "name": "Fundamentals of GIS",
      "provider": "UC Davis",
      "certificateUrl": "#",
      "grade": "95.32%",
      "spec": "GIS Specialization"
    },
    {
      "name": "GIS Data Formats, Design and Quality",
      "provider": "UC Davis",
      "certificateUrl": "#",
      "grade": "87.65%",
      "spec": "GIS Specialization"
    },
    {
      "name": "Geospatial Analysis with ArcGIS",
      "provider": "UC Davis",
      "certificateUrl": "#",
      "grade": "86.31%",
      "spec": "GIS Specialization"
    },
    {
      "name": "GIS Applications Across Industries",
      "provider": "UC Davis",
      "certificateUrl": "#",
      "grade": "97.50%",
      "spec": "GIS Specialization"
    },
    {
      "name": "Programming for Everybody (Getting Started with Python)",
      "provider": "Univ. of Michigan",
      "certificateUrl": "#",
      "grade": "98.34%",
      "spec": "Python for Everybody"
    },
    {
      "name": "Python Data Structures",
      "provider": "Univ. of Michigan",
      "certificateUrl": "#",
      "grade": "98.40%",
      "spec": "Python for Everybody"
    },
    {
      "name": "Using Python to Access Web Data",
      "provider": "Univ. of Michigan",
      "certificateUrl": "#",
      "grade": "99.30%",
      "spec": "Python for Everybody"
    },
    {
      "name": "Using Databases with Python",
      "provider": "Univ. of Michigan",
      "certificateUrl": "#",
      "grade": "97.88%",
      "spec": "Python for Everybody"
    },
    {
      "name": "Capstone: Retrieving, Processing, and Visualizing Data",
      "provider": "Univ. of Michigan",
      "certificateUrl": "#",
      "grade": "92.00%",
      "spec": "Python for Everybody"
    },
    {
      "name": "Getting Started with Data Visualization in R",
      "provider": "Johns Hopkins",
      "certificateUrl": "#",
      "grade": "92.49%",
      "spec": "Data Visualization in R"
    },
    {
      "name": "Data Visualization in R with ggplot2",
      "provider": "Johns Hopkins",
      "certificateUrl": "#",
      "grade": "89.40%",
      "spec": "Data Visualization in R"
    },
    {
      "name": "Publishing Visualizations in R with Shiny and flexdashboard",
      "provider": "Johns Hopkins",
      "certificateUrl": "#",
      "grade": "91.47%",
      "spec": "Data Visualization in R"
    },
    {
      "name": "Data Visualization Capstone",
      "provider": "Johns Hopkins",
      "certificateUrl": "#",
      "grade": "100%",
      "spec": "Data Visualization in R"
    },
    {
      "name": "Foundations of Digital Marketing and E-commerce",
      "provider": "Google",
      "certificateUrl": "#",
      "grade": "93.18%",
      "spec": "Digital Marketing & E-commerce"
    },
    {
      "name": "Attract and Engage Customers with Digital Marketing",
      "provider": "Google",
      "certificateUrl": "#",
      "grade": "88.75%",
      "spec": "Digital Marketing & E-commerce"
    },
    {
      "name": "From Likes to Leads: Interact with Customers Online",
      "provider": "Google",
      "certificateUrl": "#",
      "grade": "98.50%",
      "spec": "Digital Marketing & E-commerce"
    },
    {
      "name": "Think Outside the Inbox: Email Marketing",
      "provider": "Google",
      "certificateUrl": "#",
      "grade": "88.00%",
      "spec": "Digital Marketing & E-commerce"
    },
    {
      "name": "Assess for Success: Marketing Analytics and Measurement",
      "provider": "Google",
      "certificateUrl": "#",
      "grade": "95.62%",
      "spec": "Digital Marketing & E-commerce"
    },
    {
      "name": "Make the Sale: Build, Launch, and Manage E-commerce Stores",
      "provider": "Google",
      "certificateUrl": "#",
      "grade": "99.37%",
      "spec": "Digital Marketing & E-commerce"
    },
    {
      "name": "Satisfaction Guaranteed: Develop Customer Loyalty Online",
      "provider": "Google",
      "certificateUrl": "#",
      "grade": "95.83%",
      "spec": "Digital Marketing & E-commerce"
    },
    {
      "name": "Whole genome sequencing of bacterial genomes",
      "provider": "DTU",
      "certificateUrl": "#",
      "grade": "90.16%",
      "spec": "Genomics"
    },
    {
      "name": "DNA Decoded",
      "provider": "McMaster Univ.",
      "certificateUrl": "#",
      "grade": "85.22%",
      "spec": "Genomics"
    },
    {
      "name": "Agriculture, Economics and Nature",
      "provider": "U. of W. Australia",
      "certificateUrl": "#",
      "grade": "94.00%",
      "spec": "Agriculture"
    },
    {
      "name": "Sustainable Agricultural Land Management",
      "provider": "Univ. of Florida",
      "certificateUrl": "https://coursera.org/share/8e77cafde212ab78173daf60f79fded3",
      "grade": "94.68%",
      "spec": "Agriculture"
    },
    {
      "name": "IoT Enabled Farming",
      "provider": "EDUCBA",
      "certificateUrl": "#",
      "grade": "85.00%",
      "spec": "Technology"
    },
    {
      "name": "HTML, CSS, and Javascript for Web Developers",
      "provider": "Johns Hopkins",
      "certificateUrl": "#",
      "grade": "98.25%",
      "spec": "Technology"
    },
    {
      "name": "Excel Skills for Business: Essentials",
      "provider": "Macquarie Univ.",
      "certificateUrl": "#",
      "grade": "87.65%",
      "spec": "Technology"
    },
    {
      "name": "Introduction to Social Media Marketing",
      "provider": "Meta",
      "certificateUrl": "#",
      "grade": "94.40%",
      "spec": "Business"
    },
    {
      "name": "Accelerate Your Job Search with AI",
      "provider": "Google",
      "certificateUrl": "#",
      "grade": "100%",
      "spec": "Career"
    },
    {
      "name": "Finding Purpose and Meaning In Life",
      "provider": "Univ. of Michigan",
      "certificateUrl": "#",
      "grade": "91.49%",
      "spec": "Personal Growth"
    },
    {
      "name": "Improving Crop Nutrition Practices: Foundation Level",
      "provider": "CABI Academy",
      "certificateUrl": "https://drive.google.com/file/d/1cTjJ_VqE1qSqmdx9V-w7VaaaIr3A6CN6/view?usp=sharing",
      "grade": "Completed",
      "spec": "Agriculture"
    },
    {
      "name": "Entrepreneurship in Agribusiness: Practitioner Level",
      "provider": "CABI Academy",
      "certificateUrl": "#",
      "grade": "Completed",
      "spec": "Agribusiness"
    },
    {
      "name": "Working with a national plant protection organization",
      "provider": "FAO elearning Academy",
      "certificateUrl": "#",
      "grade": "Passed",
      "spec": "Agriculture"
    },
    {
      "name": "Using the Pesticide Registration Toolkit",
      "provider": "FAO elearning Academy",
      "certificateUrl": "#",
      "grade": "Passed",
      "spec": "Agriculture"
    },
    {
      "name": "Reducing Pesticide Risk: Foundation Level",
      "provider": "CABI Academy",
      "certificateUrl": "#",
      "grade": "Completed",
      "spec": "Agriculture"
    },
    {
      "name": "Crop Pest Diagnosis Foundation Certificate",
      "provider": "CABI Academy",
      "certificateUrl": "https://drive.google.com/file/d/1TrFGvISY9DkGOZLQx6PSL8Erh5TJ2GVu/view?usp=sharing",
      "grade": "Completed",
      "spec": "Agriculture"
    },
    {
      "name": "Transforming dryland forests and agrosilvopastoral systems",
      "provider": "FAO elearning Academy",
      "certificateUrl": "#",
      "grade": "Passed",
      "spec": "Agriculture"
    },
    {
      "name": "Introduction to Seed and Planting: Foundation Level",
      "provider": "CABI Academy",
      "certificateUrl": "#",
      "grade": "Completed",
      "spec": "Agriculture"
    },
    {
      "name": "Introduction to Bioprotection Products: Foundation Level",
      "provider": "CABI Academy",
      "certificateUrl": "#",
      "grade": "Completed",
      "spec": "Agriculture"
    }
  ],
  fellowships: [
    {
      title: "Forward Program",
      organization: "McKinsey.org",
      location: "Remote",
      period: "Mar 2025 – Jul 2025",
      certificateUrl: "https://drive.google.com/file/d/1gHQWFS0eSIpoDpS49-4UK-fXK4xKAgfB/view?usp=sharing"
    },
    {
      title: "Career-Prep Fellowship",
      organization: "Amal Academy (Stanford Seed-funded)",
      location: "Faisalabad, Pakistan",
      period: "Aug 2023 – Oct 2023",
      certificateUrl: "https://drive.google.com/file/d/1k2TFcaLD1GMe8QsNPv3LH1d7ge7Oa518/view?usp=sharing"
    },
    {
      title: "Foster Fellowship",
      organization: "Foster Learning Pakistan",
      location: "Faisalabad, Pakistan",
      period: "Mar 2019 – May 2019",
      certificateUrl: "https://drive.google.com/file/d/1ZXeBEfjK6ZLAYj5FXKaExYUwn3b7eD1Q/view?usp=sharing"
    }
  ],
  skills: [
    {
      category: "Molecular Biology & Plant Pathology",
      details: [
        "Pathogen isolation & identification",
        "PCR, Gel Electrophoresis",
        "SSR Genotyping, Marker-Assisted Selection (MAS)",
        "Primer Design",
        "Physiological Assays (SPAD, IRGA, Porometer, Osmometer, Spectrophotometry)",
        "Biochemical profiling (MDA, POD activity)"
      ]
    },
    {
      category: "Genome-Wide & Comparative Genomics",
      details: [
        "HMM-based gene family identification (HMMER 3.0)",
        "Protein domain verification (SMART, Pfam)",
        "Gene structure analysis (GSDS 2.0)",
        "Motif discovery (MEME Suite)",
        "Synteny analysis (MCScanX, Circos, TBtools-II)",
        "Promoter cis-element analysis (PlantCARE)",
        "Subcellular localization prediction (WoLF PSORT)"
      ]
    },
    {
      category: "Phylogenomics & Molecular Evolution",
      details: [
        "Phylogenetic reconstruction (MEGA 11/12; Maximum Likelihood, Neighbor-Joining; 1,000 bootstrap replicates)",
        "Sequence alignment (MAFFT, ClustalW)",
        "Recombination detection (RDP5, 7 algorithms)",
        "Positive selection analysis (MEME)",
        "Evolutionary metrics (KaKs_Calculator, DnaSP 6)",
        "Tree visualization (iTOL, ggtree)"
      ]
    },
    {
      category: "Protein Structure & Docking",
      details: [
        "Structure prediction (ColabFold)",
        "Protein-protein docking (HDOCK)",
        "Molecular dynamics simulations (GROMACS)",
        "PPI network analysis (STRING database)"
      ]
    },
    {
      category: "Data Analysis & Visualization",
      details: [
        "R Programming (tidyverse, ggplot2, ComplexHeatmap, pheatmap, circlize, seqinr)",
        "Python (BioPython, Pandas)",
        "Statistical analysis (ANOVA, Kruskal-Wallis, PCA, t-SNE)",
        "RNA-seq analysis (expression profiling, heatmap clustering)",
        "GIS & Remote Sensing"
      ]
    },
    {
      category: "Field & Agricultural Research",
      details: [
        "Greenhouse & field trial management (RCBD, factorial design)",
        "Screening for biotic & abiotic stress tolerance in rice and other crops",
        "Agroecological data collection",
        "IPM/IDM practices",
        "Sustainable agriculture frameworks"
      ]
    },
    {
      category: "Academic & Professional",
      details: [
        "Scientific writing",
        "Conference presentations",
        "Fundraising"
      ]
    }
  ],
  recommendations: [
    {
      name: "Dr. Muhammad Rashid",
      title: "Deputy Chief Scientist Rice Group, Plant Breeding and Genetics Division",
      organization: "Nuclear Institute for Agriculture and biology (NIAB) Faisalabad, Pakistan",
      email: "mrashid_niab@yahoo.com",
      phone: "+92-323-4003201",
      relationship: "Fellowship Supervisor"
    },
    {
      name: "Prof. Dr. Sajid Aleem Khan",
      title: "Professor, Department of Plant Pathology",
      organization: "University of Agriculture, Faisalabad",
      email: "sajid_aleem@uaf.edu.pk",
      phone: "+92-300-6045785",
      relationship: "Master's Supervisor"
    },
    {
      name: "Dr. Muhammad Amjad Ali",
      title: "Associate Professor, Department of Plant Pathology",
      organization: "University of Agriculture, Faisalabad",
      email: "amjad.ali@uaf.edu.pk",
      phone: "+92-345-7886980",
      relationship: "Bachelors and Master Instructor"
    }
  ],
  gallery: [
    {
      category: "Phylogenomics & Molecular Evolution",
      icon: "dna",
      figures: [
        { id: 1, file: "output_01_phylo_tree.webp", title: "Phylogenetic Tree", desc: "Maximum likelihood cladogram showing evolutionary distance", tags: ["MEGA11", "Phylogenomics", "R/ggplot2"] },
        { id: 2, file: "output_02_kaks_heatmap.webp", title: "Ka/Ks Evolutionary Selection", desc: "Heatmap of non-synonymous to synonymous substitution rates", tags: ["Ka/Ks", "Selection", "R/ggplot2"] },
      ]
    },
    {
      category: "Transcriptomics & Network Analysis",
      icon: "activity",
      figures: [
        { id: 3, file: "output_03_expression_heatmap.webp", title: "Expression Profiling Heatmap", desc: "Spatiotemporal gene expression clustering across tissues", tags: ["RNA-seq", "Heatmap", "R"] },
        { id: 7, file: "output_07_coexpression_network.webp", title: "Co-expression Network", desc: "Gene–gene interaction network visualization", tags: ["NetworkX", "Co-expression", "Python"] },
        { id: 8, file: "output_08_pca_tsne.webp", title: "PCA & t-SNE Clustering", desc: "High-dimensional dimensionality reduction", tags: ["PCA", "t-SNE", "Python"] },
      ]
    },
    {
      category: "Comparative Genomics & Synteny",
      icon: "globe",
      figures: [
        { id: 4, file: "output_04_synteny_circos.webp", title: "Synteny Circos Plot", desc: "Chromosomal mapping of orthologous gene pairs", tags: ["Circos", "Synteny", "R"] },
        { id: 5, file: "output_05_gene_structure.webp", title: "Gene Structure Architecture", desc: "Exon-intron organization combined with phylogenetic tree", tags: ["GSDS", "Genomics", "R"] },
        { id: 6, file: "output_06_motif_distribution.webp", title: "Conserved Motif Distribution", desc: "MEME predicted protein motifs mapped to sequences", tags: ["MEME Suite", "Motifs", "R/ggplot2"] },
      ]
    },
    {
      category: "Protein Structure & Docking",
      icon: "protein",
      figures: [
        { id: 9, file: "output_09_colabfold_plddt.webp", title: "ColabFold pLDDT Confidence", desc: "Per-residue confidence scores from AlphaFold2/ColabFold structure prediction", tags: ["ColabFold", "AlphaFold2", "Python"] },
        { id: 10, file: "output_10_hdock_docking.webp", title: "HDOCK Protein–Protein Docking", desc: "Binding energy heatmap from HDOCK docking simulations", tags: ["HDOCK", "Docking", "R/ggplot2"] },
        { id: 11, file: "output_11_gromacs_md.webp", title: "GROMACS Molecular Dynamics", desc: "RMSD, RMSF, Rg and H-bond trajectories from MD simulation", tags: ["GROMACS", "MD Simulation", "R/ggplot2"] },
      ]
    },
    {
      category: "Population Genetics",
      icon: "dna",
      figures: [
        { id: 12, file: "output_12_nucleotide_diversity.webp", title: "Nucleotide Diversity (π)", desc: "Sliding-window nucleotide diversity across gene family", tags: ["DnaSP", "R/ggplot2", "PopGen"] },
        { id: 13, file: "output_13_tajimas_d.webp", title: "Tajima's D Neutrality Test", desc: "Selection pressure analysis with significance thresholds", tags: ["Tajima's D", "DnaSP", "R/ggplot2"] },
        { id: 14, file: "output_14_recombination.webp", title: "Recombination Breakpoints", desc: "Detection of recombination events across aligned sequences", tags: ["RDP5", "Recombination", "R/ggplot2"] },
      ]
    },
    {
      category: "Promoter & Codon Analysis",
      icon: "search",
      figures: [
        { id: 15, file: "output_15_plantcare_ciselements.webp", title: "PlantCARE Cis-Elements", desc: "Heatmap of cis-regulatory elements in promoter regions", tags: ["PlantCARE", "ComplexHeatmap", "R"] },
        { id: 16, file: "output_16_subcellular_localization.webp", title: "Subcellular Localization", desc: "WoLF PSORT prediction results for protein compartments", tags: ["WoLF PSORT", "R/ggplot2"] },
        { id: 17, file: "output_17_codon_usage_rscu.webp", title: "Codon Usage Bias (RSCU)", desc: "Relative synonymous codon usage heatmap", tags: ["seqinr", "RSCU", "R"] },
      ]
    },
    {
      category: "Wet-Lab & Field Research",
      icon: "flask",
      figures: [
        { id: 18, file: "output_18_nematode_rcbd.webp", title: "Nematode RCBD Trial", desc: "Randomized complete block design for nematode management", tags: ["ANOVA", "RCBD", "R/ggplot2"] },
        { id: 19, file: "output_19_stress_physiology.webp", title: "Stress Physiology Panel", desc: "SPAD, IRGA, and porometer readings under stress", tags: ["Physiology", "Stress", "R/ggplot2"] },
        { id: 20, file: "output_20_biochemical_mda_pod.webp", title: "Biochemical MDA & POD", desc: "Malondialdehyde and peroxidase activity under stress", tags: ["Biochemistry", "Spectrophotometry", "R/ggplot2"] },
        { id: 21, file: "output_21_ssr_genotyping.webp", title: "SSR Marker Genotyping", desc: "Microsatellite allele scoring and diversity analysis", tags: ["SSR", "MAS", "R/ggplot2"] },
      ]
    },
    {
      category: "GIS, Genomics & Networks",
      icon: "globe",
      figures: [
        { id: 22, file: "output_22_gis_nematode_map.webp", title: "GIS Nematode Distribution", desc: "Geospatial mapping of nematode survey sites", tags: ["GIS", "Matplotlib", "Python"] },
        { id: 23, file: "output_23_genome_wide_distribution.webp", title: "Genome-wide Gene Distribution", desc: "Chromosomal distribution of gene family members", tags: ["Genomics", "Matplotlib", "Python"] },
        { id: 24, file: "output_24_ppi_network.webp", title: "Protein–Protein Interaction Network", desc: "STRING-based PPI network with community detection", tags: ["STRING", "NetworkX", "Python"] },
        { id: 25, file: "output_25_blast_similarity.webp", title: "BLAST Sequence Similarity", desc: "Pairwise sequence identity matrix across species", tags: ["BLAST", "Matplotlib", "Python"] },
      ]
    },
    {
      category: "Evolutionary Selection & RNA-seq",
      icon: "activity",
      figures: [
        { id: 26, file: "output_26_positive_selection_meme.webp", title: "Positive Selection (MEME)", desc: "Site-specific dN/dS analysis for adaptive evolution", tags: ["MEME", "HyPhy", "R/ggplot2"] },
        { id: 27, file: "output_27_rnaseq_volcano.webp", title: "RNA-seq Volcano Plot", desc: "Differential gene expression with log₂FC vs −log₁₀(p)", tags: ["RNA-seq", "DESeq2", "R/ggplot2"] },
        { id: 28, file: "output_28_skills_dashboard.webp", title: "Research Skills Profile", desc: "Self-assessed proficiency dashboard across research domains", tags: ["Dashboard", "R/ggplot2"] },
      ]
    },
    {
      category: "Machine Learning & Multi-omics",
      icon: "brain",
      figures: [
        { id: 29, file: "output_29_rf_shap_biocontrol.webp", title: "RF + SHAP Biocontrol", desc: "Random Forest feature importance with SHAP beeswarm", tags: ["Random Forest", "SHAP", "scikit-learn"] },
        { id: 30, file: "output_30_multiomics_integration.webp", title: "Multi-omics Integration", desc: "Integrated heatmap of transcriptomic, proteomic and metabolomic data", tags: ["Multi-omics", "Matplotlib", "Python"] },
        { id: 31, file: "output_31_wgcna_modules.webp", title: "WGCNA Co-expression Modules", desc: "Weighted gene co-expression network analysis", tags: ["WGCNA", "NetworkX", "Python"] },
        { id: 32, file: "output_32_roc_confusion.webp", title: "ROC Curve & Confusion Matrix", desc: "Classifier performance evaluation with AUC metrics", tags: ["ROC", "scikit-learn", "Python"] },
      ]
    },
    {
      category: "Structural Biology & Deep Evolution",
      icon: "layers",
      figures: [
        { id: 33, file: "output_33_contact_map.webp", title: "Protein Contact Map", desc: "Residue–residue distance matrix from 3D structure", tags: ["Contact Map", "R/ggplot2"] },
        { id: 34, file: "output_34_ramachandran.webp", title: "Ramachandran Plot", desc: "Backbone dihedral angles (φ/ψ) for structure validation", tags: ["Ramachandran", "R/ggplot2"] },
        { id: 35, file: "output_35_molecular_clock.webp", title: "Molecular Clock Tree", desc: "Time-calibrated phylogenetic tree with divergence dates", tags: ["Molecular Clock", "R/ggplot2"] },
        { id: 36, file: "output_36_ancestral_reconstruction.webp", title: "Ancestral State Reconstruction", desc: "Discrete trait evolution along phylogeny", tags: ["Ancestral Recon", "R/ggplot2"] },
      ]
    },
    {
      category: "Pangenome, GWAS & SDM",
      icon: "database",
      figures: [
        { id: 37, file: "output_37_pangenome.webp", title: "Pan-genome Analysis", desc: "Core, accessory and dispensable gene partitions", tags: ["Pangenome", "Matplotlib", "Python"] },
        { id: 38, file: "output_38_te_landscape.webp", title: "Transposable Element Landscape", desc: "TE family distribution across Kimura distances", tags: ["RepeatMasker", "Matplotlib", "Python"] },
        { id: 39, file: "output_39_gwas_manhattan.webp", title: "GWAS Manhattan Plot", desc: "Genome-wide association scan with significance peaks", tags: ["GWAS", "Manhattan", "Python"] },
        { id: 40, file: "output_40_species_distribution_model.webp", title: "MaxEnt Species Distribution", desc: "Climate niche modeling with current and future projections", tags: ["MaxEnt", "SDM", "Python"] },
      ]
    },
    {
      category: "Frontier & Emerging Methods",
      icon: "sparkles",
      figures: [
        { id: 41, file: "output_41_hic_tad.webp", title: "Hi-C TAD Boundaries", desc: "Topologically associated domain visualization", tags: ["Hi-C", "TAD", "R/ggplot2"] },
        { id: 42, file: "output_42_attention_map.webp", title: "Transformer Attention Map", desc: "Self-attention weights on WRKY promoter sequence", tags: ["Transformer", "Deep Learning", "R/ggplot2"] },
        { id: 43, file: "output_43_ld_decay.webp", title: "LD Decay Curves", desc: "Linkage disequilibrium decay across Oryza species", tags: ["LD Decay", "PopLDdecay", "R/ggplot2"] },
        { id: 44, file: "output_44_genome_dotplot.webp", title: "Genome Synteny Dot Plot", desc: "MUMmer alignment between indica and japonica Chr11", tags: ["MUMmer", "Synteny", "R/ggplot2"] },
      ]
    }
  ]
};
