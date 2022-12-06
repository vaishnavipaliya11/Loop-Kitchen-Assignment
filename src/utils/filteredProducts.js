export const filteredProducts = (data, appliedFilters) => {
  console.log(appliedFilters, "appliedFilters");
  let tempList = [...data];

  if (appliedFilters.maxNoOfOrder) {
    tempList = tempList.filter(
      (product) => product.numOrder <= appliedFilters.maxNoOfOrder
    );
  }
  return tempList;
};
