export function getSoma(num1, num2) {
  const soma = num1 + num2;
  return (dispatch) => {
    dispatch({
      type: 'soma',
      payload: soma,
    });
  };
}
