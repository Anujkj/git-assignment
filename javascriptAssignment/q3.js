const groupBy = (array, key) => {
  return array.reduce((result, curr) => {
    (result[curr[key]] = result[curr[key]] || []).push(curr);
    return result;
  }, {});
};

const data = [ 
  {
    "channel": "A",
    "name": "shoe"
  },
  {
    "channel": "A",
    "name": "electronics"
  },
  {
    "channel": "B",
    "name": "apparel"
  },
  {
    "channel": "C",
    "name": "electronics"
  }
];

console.log(groupBy(data, "channel"));