export const _notationKeyCollision = (
  first: string,
  second: string,
  destination: string,
): never => {
  throw new Error(
    `typia.notations cannot rename both ${JSON.stringify(first)} and ${JSON.stringify(second)} to ${JSON.stringify(destination)}.`,
  );
};
