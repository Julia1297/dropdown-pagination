import data from './data';

const options = data;

const paginationValue = 10;

//This delay is for giving the impression of using an real API
const sleep = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const loadOptions = async (search, prevOptions) => {
  await sleep(1000);
  let filteredOptions;
  if (!search) {
    filteredOptions = options;
  } 
  else {
    filteredOptions = options.filter(function (customer) {
      return customer.name.includes(search)
    });
  }
  const hasMore = filteredOptions.length > prevOptions.length + paginationValue;
  const slicedOptions = filteredOptions.slice(
    prevOptions.length,
    prevOptions.length + paginationValue
  );
  if(slicedOptions.length === 0){
    slicedOptions.unshift({
      name: "Agregar empresa " + search,
      value: 0
    })    
  }   
  return {
    options: slicedOptions,
    hasMore
  };
};

export default loadOptions;
