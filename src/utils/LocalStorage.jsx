// // localStorage.clear()
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "1234",
    "taskCount": {
      "active": 2,
      "completed": 1,
      "newTask": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Fix login bug",
        "description": "Resolve the issue causing login failures on Safari.",
        "date": "2025-06-02",
        "category": "Bug Fix",
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": false,
      },
      {
        "title": "Design dashboard UI",
        "description": "Create the dashboard layout using TailwindCSS.",
        "date": "2025-06-01",
        "category": "Design",
        "active": false,
        "newTask": false,
        "failed": true,
        "completed": false,
      },
      {
        "title": "Integrate payment gateway",
        "description": "Use Stripe API to handle transactions.",
        "date": "2025-05-30",
        "category": "Development",
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": false,
      },
      {
        "description": "Add a dark mode toggle for the application UI with localStorage support.",
        "title": "Implement dark mode",
        "category": "Feature",
        "date": "2025-06-03",
        "newTask": true,
        "active": false,
        "failed": false,
        "completed": false,
      },
      {
      "title": "Fix broken image links",
      "description": "Replace or remove images with 404 errors on the homepage carousel.",
      "date": "2025-06-01",
      "category": "Bug Fix",
      "active": false,
      "newTask": false,
      "failed": false,
      "completed": true,
      },
    ]
  },
  {
    "id": 2,
    "firstName": "Ishaan",
    "email": "employee2@example.com",
    "password": "1234",
    "taskCount": {
      "active": 2,
      "completed": 2,
      "newTask": 0,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Create API documentation",
        "description": "Use Swagger to document all backend routes.",
        "date": "2025-06-01",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "failed": false,
        "completed": true,
      },
      {
        "title": "Refactor auth module",
        "description": "Improve token validation and refresh mechanism.",
        "date": "2025-06-03",
        "category": "Development",
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": false,
      },
      {
        "title": "Test forgot password flow",
        "description": "Ensure OTP is sent and validated correctly.",
        "date": "2025-05-28",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "failed": true,
        "completed": false,
      },
      {
        "title": "Update UI components",
        "description": "Redesign buttons and modals to follow new branding.",
        "date": "2025-06-02",
        "category": "Design",
        "active": false,
        "newTask": false,
        "failed": false,
        "completed": true,
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Vihaan",
    "email": "employee3@example.com",
    "password": "1234",
    "taskCount": {
      "active": 1,
      "completed": 1,
      "newTask": 2,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Deploy to staging",
        "description": "Push the latest build to the staging environment.",
        "date": "2025-06-01",
        "category": "Deployment",
        "active": false,
        "newTask": false,
        "failed": false,
        "completed": true,
      },
      {
        "title": "Optimize homepage",
        "description": "Improve performance metrics on Lighthouse.",
        "date": "2025-06-02",
        "category": "Performance",
        "active": false,
        "newTask": true,
        "failed": false,
        "completed": false,
      },
      {
        "title": "Fix navbar overlap",
        "description": "Resolve navbar z-index issue on mobile.",
        "date": "2025-06-03",
        "category": "Bug Fix",
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": false,
      },
      {
        "title": "Conduct code review",
        "description": "Review PR #243 and suggest improvements.",
        "date": "2025-05-30",
        "category": "Review",
        "active": false,
        "newTask": false,
        "failed": true,
        "completed": false,
      },
      {
        "title": "Optimize database queries",
        "description": "Refactor slow SQL queries in the reports module to improve performance.",
        "date": "2025-06-04",
        "category": "Performance",
        "active": false,
        "newTask": true,
        "failed": false,
        "completed": false,
      },
    ]
  },
  {
    "id": 4,
    "firstName": "Kabir",
    "email": "employee4@example.com",
    "password": "1234",
    "taskCount": {
      "active": 1,
      "completed": 1,
      "newTask": 0,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Set up CI/CD pipeline",
        "description": "Integrate GitHub Actions for testing and deployment.",
        "date": "2025-06-01",
        "category": "DevOps",
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": false,
      },
      {
        "title": "Write unit tests",
        "description": "Add tests for user authentication module.",
        "date": "2025-05-31",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "failed": false,
        "completed": true,
      },
      {
        "title": "Update user profile page",
        "description": "Include new user preferences and language settings.",
        "date": "2025-06-02",
        "category": "Development",
        "active": false,
        "newTask": false,
        "failed": true,
        "completed": false,
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Arjun",
    "email": "employee5@example.com",
    "password": "1234",
    "taskCount": {
      "active": 2,
      "completed": 0,
      "newTask": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Implement dark mode",
        "description": "Add toggle and save theme preference in localStorage.",
        "date": "2025-06-03",
        "category": "UI Enhancement",
        "active": false,
        "newTask": true,
        "failed": false,
        "completed": false,
      },
      {
        "title": "Fix cart bug",
        "description": "Cart items disappear after reload — needs localStorage fix.",
        "date": "2025-06-01",
        "category": "Bug Fix",
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": false,
      },
      {
        "title": "Create marketing page",
        "description": "Build landing page with call-to-action buttons.",
        "date": "2025-05-29",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "failed": true,
        "completed": false,
      },
      {
        "title": "Implement responsive design",
        "description": "Ensure layout adjusts properly on all screen sizes.",
        "date": "2025-06-02",
        "category": "Design",
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": false,
      }
    ]
  }
]


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "1234",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
