const reducer = (state, action) => {
    switch (action.type) {
      case "changeActivity":
        return {
          ...state, 
          activity: action.activity
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
                cats: action.newCat
              }
        default:
          return state;
    }
  };

  export default reducer;