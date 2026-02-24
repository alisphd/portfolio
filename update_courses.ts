import fs from 'fs';

const courses = [
  // Bioinformatics Spec
  { id: 101, name: "Bioinformatics I: Finding Hidden Messages in DNA", inst: "UC San Diego", spec: "Bioinformatics", grade: "97.00%", verifyLink: "#" },
  { id: 102, name: "Bioinformatics II: Genome Sequencing", inst: "UC San Diego", spec: "Bioinformatics", grade: "97.89%", verifyLink: "#" },
  { id: 103, name: "Bioinformatics III: Comparing Genes, Proteins, and Genomes", inst: "UC San Diego", spec: "Bioinformatics", grade: "100%", verifyLink: "#" },
  { id: 104, name: "Bioinformatics IV: Molecular Evolution", inst: "UC San Diego", spec: "Bioinformatics", grade: "97.60%", verifyLink: "#" },
  { id: 105, name: "Bioinformatics V: Genomic Data Science and Clustering", inst: "UC San Diego", spec: "Bioinformatics", grade: "88.00%", verifyLink: "#" },
  { id: 106, name: "Bioinformatics VI: Finding Mutations in DNA and Proteins", inst: "UC San Diego", spec: "Bioinformatics", grade: "97.60%", verifyLink: "#" },
  { id: 107, name: "Bioinformatics Capstone: Big Data in Biology", inst: "UC San Diego", spec: "Bioinformatics", grade: "95.57%", verifyLink: "#" },

  // Plant Bioinformatics Spec
  { id: 201, name: "Bioinformatic Methods I", inst: "Univ. of Toronto", spec: "Plant Bioinformatic Methods", grade: "91.50%", verifyLink: "#" },
  { id: 202, name: "Bioinformatic Methods II", inst: "Univ. of Toronto", spec: "Plant Bioinformatic Methods", grade: "94.50%", verifyLink: "#" },
  { id: 203, name: "Plant Bioinformatics", inst: "Univ. of Toronto", spec: "Plant Bioinformatic Methods", grade: "100%", verifyLink: "#" },
  { id: 204, name: "Plant Bioinformatics Capstone", inst: "Univ. of Toronto", spec: "Plant Bioinformatic Methods", grade: "100%", verifyLink: "#" },

  // Agroforestry Spec
  { id: 301, name: "Agroforestry I: Principles and Practices", inst: "Univ. of Florida", spec: "Agroforestry", grade: "100%", verifyLink: "#" },
  { id: 302, name: "Agroforestry II: Major Systems of the World", inst: "Univ. of Florida", spec: "Agroforestry", grade: "100%", verifyLink: "#" },
  { id: 303, name: "Agroforestry III: Principles of Plant and Soil Management", inst: "Univ. of Florida", spec: "Agroforestry", grade: "100%", verifyLink: "#" },
  { id: 304, name: "Agroforestry IV: Climate, Carbon Storage and Agroforestry", inst: "Univ. of Florida", spec: "Agroforestry", grade: "100%", verifyLink: "#" },
  { id: 305, name: "Agroforestry V: Ecosystem Services, Food and Sustainability", inst: "Univ. of Florida", spec: "Agroforestry", grade: "100%", verifyLink: "#" },

  // Agribusiness Spec
  { id: 401, name: "Supply Chain of Agriculture", inst: "Univ. of Illinois", spec: "Agribusiness & Sustainable Food", grade: "91.50%", verifyLink: "#" },
  { id: 402, name: "Agriculture as an Asset Class", inst: "Univ. of Illinois", spec: "Agribusiness & Sustainable Food", grade: "93.75%", verifyLink: "#" },
  { id: 403, name: "Strategies and Tools to Mitigate Agricultural Risk", inst: "Univ. of Illinois", spec: "Agribusiness & Sustainable Food", grade: "95.50%", verifyLink: "#" },
  { id: 404, name: "Modern Issues in Food & Agriculture", inst: "Univ. of Illinois", spec: "Agribusiness & Sustainable Food", grade: "96.00%", verifyLink: "#" },
  { id: 405, name: "Risks to Crop Production in Agriculture", inst: "Univ. of Illinois", spec: "Agribusiness & Sustainable Food", grade: "95.50%", verifyLink: "#" },
  { id: 406, name: "Issues in Supply Chain Management", inst: "Univ. of Illinois", spec: "Agribusiness & Sustainable Food", grade: "88.00%", verifyLink: "#" },
  { id: 407, name: "Pest & Disease Management", inst: "Univ. of Illinois", spec: "Agribusiness & Sustainable Food", grade: "93.33%", verifyLink: "#" },

  // GIS Spec
  { id: 501, name: "Fundamentals of GIS", inst: "UC Davis", spec: "GIS Specialization", grade: "95.32%", verifyLink: "#" },
  { id: 502, name: "GIS Data Formats, Design and Quality", inst: "UC Davis", spec: "GIS Specialization", grade: "87.65%", verifyLink: "#" },
  { id: 503, name: "Geospatial Analysis with ArcGIS", inst: "UC Davis", spec: "GIS Specialization", grade: "86.31%", verifyLink: "#" },
  { id: 504, name: "GIS Applications Across Industries", inst: "UC Davis", spec: "GIS Specialization", grade: "97.50%", verifyLink: "#" },

  // Python Spec
  { id: 601, name: "Programming for Everybody (Getting Started with Python)", inst: "Univ. of Michigan", spec: "Python for Everybody", grade: "98.34%", verifyLink: "#" },
  { id: 602, name: "Python Data Structures", inst: "Univ. of Michigan", spec: "Python for Everybody", grade: "98.40%", verifyLink: "#" },
  { id: 603, name: "Using Python to Access Web Data", inst: "Univ. of Michigan", spec: "Python for Everybody", grade: "99.30%", verifyLink: "#" },
  { id: 604, name: "Using Databases with Python", inst: "Univ. of Michigan", spec: "Python for Everybody", grade: "97.88%", verifyLink: "#" },
  { id: 605, name: "Capstone: Retrieving, Processing, and Visualizing Data", inst: "Univ. of Michigan", spec: "Python for Everybody", grade: "92.00%", verifyLink: "#" },

  // Data Viz R Spec
  { id: 701, name: "Getting Started with Data Visualization in R", inst: "Johns Hopkins", spec: "Data Visualization in R", grade: "92.49%", verifyLink: "#" },
  { id: 702, name: "Data Visualization in R with ggplot2", inst: "Johns Hopkins", spec: "Data Visualization in R", grade: "89.40%", verifyLink: "#" },
  { id: 703, name: "Publishing Visualizations in R with Shiny and flexdashboard", inst: "Johns Hopkins", spec: "Data Visualization in R", grade: "91.47%", verifyLink: "#" },
  { id: 704, name: "Data Visualization Capstone", inst: "Johns Hopkins", spec: "Data Visualization in R", grade: "100%", verifyLink: "#" },

  // Google Digital Marketing Spec
  { id: 801, name: "Foundations of Digital Marketing and E-commerce", inst: "Google", spec: "Digital Marketing & E-commerce", grade: "93.18%", verifyLink: "#" },
  { id: 802, name: "Attract and Engage Customers with Digital Marketing", inst: "Google", spec: "Digital Marketing & E-commerce", grade: "88.75%", verifyLink: "#" },
  { id: 803, name: "From Likes to Leads: Interact with Customers Online", inst: "Google", spec: "Digital Marketing & E-commerce", grade: "98.50%", verifyLink: "#" },
  { id: 804, name: "Think Outside the Inbox: Email Marketing", inst: "Google", spec: "Digital Marketing & E-commerce", grade: "88.00%", verifyLink: "#" },
  { id: 805, name: "Assess for Success: Marketing Analytics and Measurement", inst: "Google", spec: "Digital Marketing & E-commerce", grade: "95.62%", verifyLink: "#" },
  { id: 806, name: "Make the Sale: Build, Launch, and Manage E-commerce Stores", inst: "Google", spec: "Digital Marketing & E-commerce", grade: "99.37%", verifyLink: "#" },
  { id: 807, name: "Satisfaction Guaranteed: Develop Customer Loyalty Online", inst: "Google", spec: "Digital Marketing & E-commerce", grade: "95.83%", verifyLink: "#" },

  // Independent
  { id: 901, name: "Whole genome sequencing of bacterial genomes", inst: "DTU", spec: "Genomics", grade: "90.16%", verifyLink: "#" },
  { id: 902, name: "DNA Decoded", inst: "McMaster Univ.", spec: "Genomics", grade: "85.22%", verifyLink: "#" },
  { id: 903, name: "Agriculture, Economics and Nature", inst: "U. of W. Australia", spec: "Agriculture", grade: "94.00%", verifyLink: "#" },
  { id: 904, name: "Sustainable Agricultural Land Management", inst: "Univ. of Florida", spec: "Agriculture", grade: "94.68%", verifyLink: "#" },
  { id: 905, name: "IoT Enabled Farming", inst: "EDUCBA", spec: "Technology", grade: "85.00%", verifyLink: "#" },
  { id: 906, name: "HTML, CSS, and Javascript for Web Developers", inst: "Johns Hopkins", spec: "Technology", grade: "98.25%", verifyLink: "#" },
  { id: 907, name: "Excel Skills for Business: Essentials", inst: "Macquarie Univ.", spec: "Technology", grade: "87.65%", verifyLink: "#" },
  { id: 908, name: "Introduction to Social Media Marketing", inst: "Meta", spec: "Business", grade: "94.40%", verifyLink: "#" },
  { id: 909, name: "Accelerate Your Job Search with AI", inst: "Google", spec: "Career", grade: "100%", verifyLink: "#" },
  { id: 910, name: "Finding Purpose and Meaning In Life", inst: "Univ. of Michigan", spec: "Personal Growth", grade: "91.49%", verifyLink: "#" },

  // Newly Added CABI & FAO Courses
  { id: 911, name: "Improving Crop Nutrition Practices: Foundation Level", inst: "CABI Academy", spec: "Agriculture", grade: "Completed", verifyLink: "#" },
  { id: 912, name: "Entrepreneurship in Agribusiness: Practitioner Level", inst: "CABI Academy", spec: "Agribusiness", grade: "Completed", verifyLink: "#" },
  { id: 913, name: "Working with a national plant protection organization", inst: "FAO elearning Academy", spec: "Agriculture", grade: "Passed", verifyLink: "#" },
  { id: 914, name: "Using the Pesticide Registration Toolkit", inst: "FAO elearning Academy", spec: "Agriculture", grade: "Passed", verifyLink: "#" },
  { id: 915, name: "Reducing Pesticide Risk: Foundation Level", inst: "CABI Academy", spec: "Agriculture", grade: "Completed", verifyLink: "#" },
  { id: 916, name: "Crop Pest Diagnosis Foundation Certificate", inst: "CABI Academy", spec: "Agriculture", grade: "Completed", verifyLink: "#" },
  { id: 917, name: "Transforming dryland forests and agrosilvopastoral systems", inst: "FAO elearning Academy", spec: "Agriculture", grade: "Passed", verifyLink: "#" },
  { id: 918, name: "Introduction to Seed and Planting: Foundation Level", inst: "CABI Academy", spec: "Agriculture", grade: "Completed", verifyLink: "#" },
  { id: 919, name: "Introduction to Bioprotection Products: Foundation Level", inst: "CABI Academy", spec: "Agriculture", grade: "Completed", verifyLink: "#" }
];

const mappedCourses = courses.map(c => ({
  name: c.name,
  provider: c.inst,
  certificateUrl: c.verifyLink,
  grade: c.grade,
  spec: c.spec
}));

const filePath = 'src/data.ts';
let content = fs.readFileSync(filePath, 'utf-8');

const coursesRegex = /courses:\s*\[[\s\S]*?\],\n\s*fellowships:/;
content = content.replace(coursesRegex, `courses: ${JSON.stringify(mappedCourses, null, 4).replace(/\n/g, '\n  ')},\n  fellowships:`);

fs.writeFileSync(filePath, content);
console.log('Updated courses in src/data.ts');
