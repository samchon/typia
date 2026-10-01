/**
 * Throw the error for two keys that rename to the same destination.
 *
 * @evidence contracts/common.md#principled-implementation The function throws an error that names the two source keys and the destination that they both map to, which is the information needed to correct the type.
 * @evidence contracts/common.md#clear-and-simple-design One throw with a typed `never` result.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The collision is surfaced and not repaired.
 * @evidence contracts/common.md#meaningful-documentation A comment states the message content.
 */
export const _notationKeyCollision = (
  first: string,
  second: string,
  destination: string,
): never => {
  throw new Error(
    `typia.notations cannot rename both ${JSON.stringify(first)} and ${JSON.stringify(second)} to ${JSON.stringify(destination)}.`,
  );
};
