// eslint-disable-next-line import/prefer-default-export
export function getSoma(num1, num2) {
  const soma = num1 + num2;
  return (dispatch) => {
    dispatch({
      type: 'soma',
      payload: soma,
    });
  };
}
