const reducer = (state, action) => {
    switch (action.type) {
      case "changeActivity":
        return {
          ...state,
          cats: {
            activity: action.activity
          }
        };
        case "changeName":
          return {
            ...state,
            name: action.newName
          };
          case "newActivity":
            return {
              ...state,
              activity: action.activity
            };
            case "addCat":
              return {
                ...state,
                name: action.newCatName,
                activity: action.newCatActivity
              };
        default:
          return state;
    }
  };

  export default reducer;