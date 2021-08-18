const promise = new Promise((resolve, reject) => {
  let arr = [];

  for (let i = 0; i < 10; i += 1) {
    arr.push(Math.round(Math.random() * 50) ** 2);
  }

  let sum = arr.reduce((acc, curr) => acc + curr, 0);

  if (sum < 8000) resolve('Promise resolvida');
  else reject('Promise rejeitada');
})
  .then((resolucao) => console.log(resolucao))
  .catch((error) => console.log(error));
