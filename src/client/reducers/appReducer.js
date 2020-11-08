export default (state = [], action) => {
  switch (action.type) {
    case 'LOADING': {
      return {
        loading: true,
      };
    }
    case 'FETCH_DATA':
      const { data, error } = action.payload;
      return { ...state, items: data, loading: false, error };
    default:
      return state;
  }
};
