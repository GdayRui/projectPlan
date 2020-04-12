// export const createPorject = (project) => {
//   return {
//     type: "CREATE_PROJECT",
//     project: project,
//   };
// };

export const createProject = (project) => {
  // using thunk to return a function
  return (dispatch, getState) => {
    //make async call to database
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
