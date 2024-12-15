export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: ""
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      <p><strong>Project Overview:</strong></p>
      <p>Provide a brief description of the project, its goals, and objectives.</p>
      <p><strong>Scope of Work:</strong></p>
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
      <p><strong>Timeline:</strong></p>
      <p>Start Date: [Enter start date]</p>
      <p>End Date: [Enter end date]</p>
      <p><strong>Budget:</strong></p>
      <p>[Enter budget]</p>
    `
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>
      <p><strong>Project Name:</strong> [Enter project name]</p>
      <p><strong>Overview:</strong></p>
      <p>[Enter project overview]</p>
      <p><strong>Objectives:</strong></p>
      <ul>
        <li>Objective 1</li>
        <li>Objective 2</li>
        <li>Objective 3</li>
      </ul>
      <p><strong>Estimated Timeline:</strong></p>
      <p>Start Date: [Enter start date]</p>
      <p>End Date: [Enter end date]</p>
    `
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <h1>Business Letter</h1>
      <p><strong>Recipient's Name:</strong> [Enter recipient's name]</p>
      <p><strong>Company Name:</strong> [Enter company name]</p>
      <p><strong>Subject:</strong> [Enter subject]</p>
      <p>[Dear recipient,]</p>
      <p>[Enter letter content here]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
      <p>[Your Position]</p>
      <p>[Company Name]</p>
    `
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1>Resume</h1>
      <h2>Contact Information</h2>
      <p><strong>Name:</strong> [Your Name]</p>
      <p><strong>Email:</strong> [Your Email]</p>
      <p><strong>Phone:</strong> [Your Phone Number]</p>
      <p><strong>LinkedIn:</strong> [Your LinkedIn Profile]</p>
      <h2>Professional Experience</h2>
      <p><strong>Job Title:</strong> [Your Job Title]</p>
      <p><strong>Company:</strong> [Company Name]</p>
      <p><strong>Duration:</strong> [Start Date] - [End Date]</p>
      <p>[Job Responsibilities]</p>
      <h2>Education</h2>
      <p><strong>Degree:</strong> [Degree]</p>
      <p><strong>Institution:</strong> [University Name]</p>
      <p><strong>Graduation Year:</strong> [Year]</p>
    `
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <h1>Cover Letter</h1>
      <p><strong>Recipient's Name:</strong> [Enter recipient's name]</p>
      <p><strong>Company Name:</strong> [Enter company name]</p>
      <p><strong>Subject:</strong> [Enter subject]</p>
      <p>[Dear Hiring Manager,]</p>
      <p>[Enter letter content here]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <h1>Letter</h1>
      <p><strong>Recipient's Name:</strong> [Enter recipient's name]</p>
      <p><strong>Address:</strong> [Enter address]</p>
      <p><strong>Subject:</strong> [Enter subject]</p>
      <p>[Dear recipient,]</p>
      <p>[Enter letter content here]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `
  }
];
