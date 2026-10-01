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
 *
 * @evidence contracts/common.md#principled-implementation The clean invocation must return literal true and every authored spoiled invocation must return literal false; a non-Boolean result fails on either branch.
 * @evidence contracts/common.md#clear-and-simple-design The curried name, fixture and predicate parameters retain existing generated-call bindings; each spoiler receives a new generated value and the loop reports its own fixture/index failure.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Supplied callbacks are executed directly without replacing product methods or accepting fixture-specific expected outputs. The existing fixture traversal decisions are retained; exact Boolean comparisons reject malformed results rather than compensating for them.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies the return-value contract and fixture ownership; the acknowledgments state the precise assertions, original traversal premises and any oracle limitation.
 * @evidence contracts/testing.md#behavioral-verification The clean invocation must return literal true and every authored spoiled invocation must return literal false; a non-Boolean result fails on either branch.
 * @evidence contracts/testing.md#independent-expectations The fixture generator and spoiler mutations specify clean versus invalid input independently of the supplied predicate. Expected results are literal Boolean values, not another predicate computation.
 * @evidence contracts/testing.md#distinguishing-cases Each fixture contributes one clean value and its declared spoilers. A fixture without spoilers contributes clean acceptance only. Plugin-free sensitivity tests separately inject non-Boolean results on clean and spoiled calls.
 * @evidence contracts/testing.md#execution-ownership This shared oracle executes only the supplied callback and fixture operations. Matching test-utils-unit cases call it under a plugin-free configuration; the existing automated/composite wrappers retain their actual native-produced callbacks and their own boundary execution.
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
 *
 * @evidence contracts/common.md#principled-implementation The clean result must be literal true. Each repetition adds a surplus key to reachable ordinary objects and requires literal false when at least one object was spoiled. Primitive-only values have no surplus-object assertion.
 * @evidence contracts/common.md#clear-and-simple-design A small private recursive traversal reports whether it added any surplus member, so primitive-only values do not invent a negative case. Recursion assumes the authored fixture is finite and acyclic, as the original traversal does; repeat preserves the existing caller-controlled repetition count.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Supplied callbacks are executed directly without replacing product methods or accepting fixture-specific expected outputs. The existing fixture traversal decisions are retained; exact Boolean comparisons reject malformed results rather than compensating for them.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies the return-value contract and fixture ownership; the acknowledgments state the precise assertions, original traversal premises and any oracle limitation.
 * @evidence contracts/testing.md#behavioral-verification The clean result must be literal true. Each repetition adds a surplus key to reachable ordinary objects and requires literal false when at least one object was spoiled. Primitive-only values have no surplus-object assertion.
 * @evidence contracts/testing.md#independent-expectations A valid authored fixture is the clean input; the helper-owned surplus key is outside the selected closed-object fixture contract. The configured native matrix excludes ADDABLE false fixtures; this helper does not infer whether an arbitrary index signature permits the key.
 * @evidence contracts/testing.md#distinguishing-cases Clean acceptance, object/array-nested surplus rejection and primitive-only no-spoil behavior are distinct. Unit sensitivity cases isolate malformed clean and spoiled returns; the native normal validator matrix separately owns ordinary invalid field values.
 * @evidence contracts/testing.md#execution-ownership This shared oracle executes only the supplied callback and fixture operations. Matching test-utils-unit cases call it under a plugin-free configuration; the existing automated/composite wrappers retain their actual native-produced callbacks and their own boundary execution.
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
 *
 * @evidence contracts/common.md#principled-implementation The surplus-spoiled clean value must return literal true and lose the injected keys; each independently invalid fixture spoiler must return literal false. The existing emitted-source catch-all guard still bypasses the surplus-removal check and remains an unresolved oracle limitation.
 * @evidence contracts/common.md#clear-and-simple-design The existing private object/array traversal and injection population are preserved. The predicate receives the same mutated clean value that is checked after pruning; invalid cases start from separately generated values. The finite acyclic fixture premise and catch-all source guard remain visible.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Supplied callbacks are executed directly without replacing product methods or accepting fixture-specific expected outputs. The existing fixture traversal decisions are retained; exact Boolean comparisons reject malformed results rather than compensating for them.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies the return-value contract and fixture ownership; the acknowledgments state the precise assertions, original traversal premises and any oracle limitation.
 * @evidence contracts/testing.md#behavioral-verification The surplus-spoiled clean value must return literal true and lose the injected keys; each independently invalid fixture spoiler must return literal false. The existing emitted-source catch-all guard still bypasses the surplus-removal check and remains an unresolved oracle limitation.
 * @evidence contracts/testing.md#independent-expectations The fixture generator/spoilers establish valid and invalid field values; the helper authors the surplus-key population. Literal true/false expectations follow the isPrune contract. Source-text detection of a catch-all is not an independent pruning oracle and is retained for separate investigation.
 * @evidence contracts/testing.md#distinguishing-cases Surplus removal on otherwise-valid data and rejection of each fixture spoiler are separate checks. Plugin-free sensitivity cases use a pruning callback that removes keys correctly while injecting malformed results independently on clean and invalid calls.
 * @evidence contracts/testing.md#execution-ownership This shared oracle executes only the supplied callback and fixture operations. Matching test-utils-unit cases call it under a plugin-free configuration; the existing automated/composite wrappers retain their actual native-produced callbacks and their own boundary execution.
 */
export const _test_plain_isPrune =
  (name: string) =>
  <T>(factory: ITestPredicateFixture<T>) =>
  (prune: (input: T) => boolean): void => {
    const input: T = factory.generate();

    // SPOIL OBJECTS
    iteratePrune((obj: any) =>
      new Array(10)
        .fill("")
        .forEach((_, i) => (obj[`__non_regular_type__${i}`] = "vulnerable")),
    )(input);

    // DO VALIDATE
    if (prune(input) !== true)
      throw new Error(
        `Bug on typia.plain.isPrune(): failed to understand the ${name} type.`,
      );
    else if (prune.toString().indexOf("RegExp(/(.*)/).test") === -1)
      iteratePrune((obj: any) => {
        if (
          Object.keys(obj).some(
            (key) => key.indexOf("__non_regular_type__") === 0,
          )
        )
          throw new Error(
            `Bug on typia.plain.isPrune(): failed to prune the ${name} type.`,
          );
      })(input);

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

const iteratePrune =
  (closure: (obj: any) => void) =>
  (input: any): void => {
    if (Array.isArray(input)) return iteratePruneArray(closure)(input);
    else if (
      input !== null &&
      typeof input === "object" &&
      typeof input.valueOf() === "object"
    )
      return iteratePruneObject(closure)(input);
  };

const iteratePruneObject =
  (closure: (obj: any) => void) =>
  (input: any): void => {
    closure(input);
    for (const value of Object.values(input)) iteratePrune(closure)(value);
  };

const iteratePruneArray =
  (closure: (obj: any) => void) =>
  (input: any): void =>
    input.forEach((elem: any) => iteratePrune(closure)(elem));
