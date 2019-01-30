// eslint-disable-next-line import/prefer-default-export
export function addItem(item) {
  return (dispatch) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });
  };
}
