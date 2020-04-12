const initState = {
  projects: [
    { id: 1, title: "IT", content: "finish this react-redux course" },
    { id: 2, title: "ENGLISH", content: "listen to Kris English" },
    { id: 3, title: "EUREKA", content: "paint with little one" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};

export default projectReducer;
