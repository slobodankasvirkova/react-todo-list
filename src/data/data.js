const categories = [
    {
      title: "Personal",
      slug: "personal",
    },
    {
      title: "Work",
      slug: "work",
    },
    {
      title: "Shopping",
      slug: "shopping",
    },
  ];
  
  const todos = [
    {
      id: 1,
      title: "Dentist appt.",
      category: "personal",
      completed: false,
    },
    {
      id: 2,
      title: "Do JS homework",
      category: "work",
      completed: false,
    },
    {
      id: 3,
      title: "Buy milk",
      category: "shopping",
      completed: true,
    },
  ];
  
  export default {
    categories,
    todos,
  };