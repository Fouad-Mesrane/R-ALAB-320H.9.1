export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        {
          userId: "1",
          id: Date.now(),
          title: action.payload,
          completed: false,
        },
        ...state,
      ];
    case "CHECKBOX":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: action.payload.completed }
          : todo
      );
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};
