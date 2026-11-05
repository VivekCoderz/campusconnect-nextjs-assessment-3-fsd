// Static dummy data for CampusConnect

export const students = [
  { id: 1, name: "Rahul Sharma", rollNo: "CSE2023045", department: "Computer Science", year: "3rd Year", email: "rahul@campus.edu", attendance: 87, skills: ["React", "Next.js", "Node.js", "SQL"], courses: [1, 2, 3] },
  { id: 2, name: "Priya Verma", rollNo: "CSE2023012", department: "Computer Science", year: "3rd Year", email: "priya@campus.edu", attendance: 92, skills: ["Python", "Machine Learning", "Django"], courses: [1, 3, 4] },
  { id: 3, name: "Amit Kumar", rollNo: "ECE2023021", department: "Electronics", year: "2nd Year", email: "amit@campus.edu", attendance: 78, skills: ["Embedded C", "Arduino", "MATLAB"], courses: [5, 6] },
  { id: 4, name: "Sneha Gupta", rollNo: "ME2023008", department: "Mechanical", year: "4th Year", email: "sneha@campus.edu", attendance: 81, skills: ["AutoCAD", "SolidWorks"], courses: [6] },
  { id: 5, name: "Karan Singh", rollNo: "CSE2023033", department: "Computer Science", year: "2nd Year", email: "karan@campus.edu", attendance: 74, skills: ["Java", "Spring Boot", "MongoDB"], courses: [2, 4] },
  { id: 6, name: "Anjali Mehta", rollNo: "IT2023017", department: "Information Technology", year: "3rd Year", email: "anjali@campus.edu", attendance: 95, skills: ["UI/UX", "Figma", "HTML/CSS"], courses: [3, 4] },
  { id: 7, name: "Rohit Yadav", rollNo: "ECE2023040", department: "Electronics", year: "3rd Year", email: "rohit@campus.edu", attendance: 69, skills: ["VLSI", "Verilog"], courses: [5] },
  { id: 8, name: "Neha Joshi", rollNo: "IT2023029", department: "Information Technology", year: "2nd Year", email: "neha@campus.edu", attendance: 88, skills: ["JavaScript", "React", "Git"], courses: [1, 3] },
];

export const departments = ["All", "Computer Science", "Information Technology", "Electronics", "Mechanical"];

export const courses = [
  { id: 1, code: "CS3503", name: "Full Stack Development", faculty: "Dr. Anil Kapoor", credits: 4, progress: 65, description: "Build modern web applications using React, Next.js, Node.js and databases.", modules: ["React Basics", "Next.js Routing", "APIs with Node.js", "Database Integration", "Deployment"] },
  { id: 2, code: "CS3401", name: "Database Systems", faculty: "Dr. Meena Rao", credits: 3, progress: 80, description: "Relational models, SQL, normalization, transactions and indexing.", modules: ["ER Model", "SQL", "Normalization", "Transactions", "Indexing"] },
  { id: 3, code: "CS3302", name: "Web Technologies", faculty: "Prof. Sunil Jain", credits: 3, progress: 50, description: "HTML, CSS, JavaScript and responsive web design fundamentals.", modules: ["HTML5", "CSS3 & Flexbox", "JavaScript", "Responsive Design"] },
  { id: 4, code: "CS3605", name: "Software Engineering", faculty: "Dr. Kavita Nair", credits: 4, progress: 40, description: "SDLC models, requirement analysis, design, testing and project management.", modules: ["SDLC", "Requirements", "UML Design", "Testing", "Agile"] },
  { id: 5, code: "EC3201", name: "Digital Electronics", faculty: "Dr. Ravi Shankar", credits: 3, progress: 70, description: "Logic gates, combinational and sequential circuits.", modules: ["Boolean Algebra", "Logic Gates", "Flip-Flops", "Counters"] },
  { id: 6, code: "ME3105", name: "Engineering Mathematics", faculty: "Prof. Rekha Iyer", credits: 4, progress: 90, description: "Linear algebra, calculus and differential equations.", modules: ["Matrices", "Calculus", "Differential Equations", "Probability"] },
];

export const assignments = [
  { id: 1, title: "React Project", courseId: 1, dueDate: "10 Nov 2026", status: "Pending", priority: "High" },
  { id: 2, title: "Database Design", courseId: 2, dueDate: "08 Nov 2026", status: "Submitted", priority: "Medium" },
  { id: 3, title: "UI Design Task", courseId: 3, dueDate: "05 Nov 2026", status: "Pending", priority: "High" },
  { id: 4, title: "Final Project Proposal", courseId: 4, dueDate: "01 Nov 2026", status: "Completed", priority: "Low" },
  { id: 5, title: "Database Assignment", courseId: 2, dueDate: "12 Nov 2026", status: "Pending", priority: "Medium" },
  { id: 6, title: "Web Design Portfolio", courseId: 3, dueDate: "15 Nov 2026", status: "Pending", priority: "Low" },
  { id: 7, title: "UML Diagrams", courseId: 4, dueDate: "28 Oct 2026", status: "Completed", priority: "Low" },
];

export const recentActivities = [
  { text: "Submitted Database Design assignment", time: "2 hours ago" },
  { text: "Joined Full Stack Development lecture", time: "Yesterday" },
  { text: "Completed Final Project Proposal", time: "3 days ago" },
  { text: "Attendance marked for Web Technologies", time: "4 days ago" },
];

export function getCourse(id) {
  return courses.find((c) => c.id === Number(id));
}

export function getStudent(id) {
  return students.find((s) => s.id === Number(id));
}
