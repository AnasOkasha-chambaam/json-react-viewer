const equalSet = (firstSet, secondSet) => {
  let counter = 0;
  firstSet.size === secondSet.size &&
    [...firstSet].every((x) => {
      if (secondSet.has(x)) {
        counter++;
      }
      return secondSet.has(x);
    });
  return counter;
};

export function isItemObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
export function checkIfArrayItemsAreAllObjects(array) {
  let finalKeys = [];
  let onlyContainsObjects = true,
    objectsShareAtLeastTwoAttributes = true;
  // If it contains any item other than objects
  array.forEach((item, index) => {
    if (!isItemObject(item)) {
      onlyContainsObjects = false;
      return onlyContainsObjects && objectsShareAtLeastTwoAttributes;
    }
    // If all objects share at least two attributes
    if (
      index !== 0 &&
      equalSet(
        new Set(Object.keys(item)),
        new Set(Object.keys(array[index - 1]))
      ) < 3
    ) {
      objectsShareAtLeastTwoAttributes = false;
      return onlyContainsObjects && objectsShareAtLeastTwoAttributes;
    }
    finalKeys = [...new Set([...finalKeys, ...Object.keys(item)])];
  });

  return [onlyContainsObjects && objectsShareAtLeastTwoAttributes, finalKeys];
}
