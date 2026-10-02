import { preparePrune } from "./TestPrune";

/** The minimal fixture behavior used by portable predicate assertion helpers. */
interface ITestPredicateFixture<T> {
  /** Supplies a separately usable authored value for each scenario. */
  generate(): T;

  /** Mutates one value into an invalid case and supplies its diagnostic paths. */
  SPOILERS?: ((input: T) => string[])[];
}

/**
 * Checks a Boolean predicate against clean values and authored spoilers.
 *
 * Literal Boolean results matter: rejecting only the opposite Boolean would
 * accept undefined, null and other malformed predicate results.
 */
export const _test_is =
  (name: string) =>
  <T>(factory: ITestPredicateFixture<T>) =>
  (is: (input: T) => boolean): void => {
    if (is(factory.generate()) !== true)
      throw new Error(
        `Bug on typia.is(): failed to understand the ${name} type.`,
      );

    (factory.SPOILERS ?? []).forEach((spoil, i) => {
      const elem: T = factory.generate();
      spoil(elem);

      if (is(elem) !== false)
        throw new Error(
          `Bug on typia.is(): failed to detect error on the ${name} (${i}) type.`,
        );
    });
  };

/**
 * Checks exact Boolean acceptance and rejection of surplus object members.
 *
 * A falsy non-Boolean result is neither a valid acceptance result nor a valid
 * rejection result, even when its truthiness resembles false.
 */
export const _test_equals =
  (name: string) =>
  <T>(factory: ITestPredicateFixture<T>) =>
  (equals: (input: T) => boolean, repeat: number = 1): void => {
    if (equals(factory.generate()) !== true)
      throw new Error(
        `Bug on typia.equals(): failed to understand the ${name} type.`,
      );

    while (repeat-- > 0) {
      const elem: T = factory.generate();
      if (spoilEquals(elem) && equals(elem) !== false)
        throw new Error(
          `Bug on typia.equals(): failed to detect error on the ${name} type.`,
        );
    }
  };

function spoilEquals(input: any): boolean {
  if (Array.isArray(input)) return spoilEqualsArray(input);
  else if (
    typeof input === "object" &&
    input !== null &&
    typeof input.valueOf() === "object"
  )
    return spoilEqualsObject(input);
  return false;
}

function spoilEqualsObject(obj: any): boolean {
  obj.__non_regular_type__ = "vulnerable";
  for (const value of Object.values(obj)) spoilEquals(value);
  return true;
}

function spoilEqualsArray(array: any): boolean {
  const res: boolean[] = array.map((child: any) => spoilEquals(child));
  return res.some((b) => b);
}

/**
 * Checks Boolean pruning results, surplus removal and authored invalid inputs.
 *
 * Pruning the surplus members is insufficient if the operation returns a
 * malformed non-Boolean status. The clean and spoiled result contracts must
 * both remain observable.
 */
export const _test_plain_isPrune =
  (name: string) =>
  <T>(factory: ITestPredicateFixture<T>) =>
  (prune: (input: T) => boolean): void => {
    const input: T = factory.generate();

    const check = preparePrune(
      input,
      `Bug on typia.plain.isPrune(): failed to prune the ${name} type.`,
    );
    if (prune(input) !== true)
      throw new Error(
        `Bug on typia.plain.isPrune(): failed to understand the ${name} type.`,
      );
    check();

    // SPOIL
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      spoil(elem);

      if (prune(elem) !== false)
        throw new Error(
          `Bug on typia.plain.isPrune(): failed to detect error on the ${name} type.`,
        );
    }
  };
