import typia from "typia";

// custom comparison methods — case-insensitive, diverging from structural
class Word {
  constructor(public value: string) {}
  equals(other: Word): boolean {
    return this.value.toLowerCase() === other.value.toLowerCase();
  }
  less(other: Word): boolean {
    return this.value.toLowerCase() < other.value.toLowerCase();
  }
}
const equalsWord = typia.compare.createEquals<Word>();
const lessWord = typia.compare.createLess<Word>();
// nested delegation: the inner type carries the methods
interface IBox {
  id: number;
  word: Word;
}
const equalsBox = typia.compare.createEquals<IBox>();
const lessBox = typia.compare.createLess<IBox>();
// a non-comparison method must be ignored (not rejected); compare by fields
class Money {
  constructor(
    public amount: number,
    public currency: string,
  ) {}
  format(): string {
    return this.amount + " " + this.currency;
  }
}
const equalsMoney = typia.compare.createEquals<Money>();
const lessMoney = typia.compare.createLess<Money>();
/**
 * Verifies custom comparison delegation and ordinary method omission.
 *
 * Runs the real native callbacks so correct emitted text cannot hide a runtime
 * routing, receiver, copy or comparison defect.
 *
 * 1. Produce the same typed public callbacks as the original regression.
 * 2. Execute its authored inputs and independent result assertions.
 * 3. Propagate every failed comparison to the shared suite runner.
 *
 * @evidence contracts/testing.md#behavioral-verification Case-insensitive Word methods intentionally disagree with structural field comparison; nested id precedence and Money field ordering retain non-comparison controls.
 * @evidence contracts/testing.md#independent-expectations The retained literal expectations encode the authored type/value contract, not emitted-source patterns. Type-level equality assertions, where present, remain compiled independently of runtime comparisons.
 * @evidence contracts/testing.md#distinguishing-cases Case-insensitive Word methods intentionally disagree with structural field comparison; nested id precedence and Money field ordering retain non-comparison controls.
 * @evidence contracts/testing.md#execution-ownership The matching exported composite is discovered by TestServant in test-typia-automated. Private typed producers and deliberately unchecked JavaScript-style runtime inputs preserve the original test boundary.
 * @evidence contracts/e2e.md#necessary-boundary Real typia public calls are transformed and their callbacks execute in Node. Go unit assertions on metadata or emitted text cannot detect a runtime result, receiver or mutation defect.
 * @evidence contracts/e2e.md#shared-execution This case reuses the suite's generated project and shared worker with other native composites; it starts no compiler project, subprocess or artifact installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation constructs its own sample inputs and observations. Cases that mutate arrays, objects or recursive graphs retain those values within that invocation, and do not cache verdicts. The suite owns and closes the worker.
 * @evidence contracts/e2e.md#preserved-coverage The original typed fixture, public call forms and runtime input/assertion population are retained here. No original runtime distinction is removed from this case. Execution is verified by the canonical suite run, not this comment.
 */
export const test_native_compare_method_delegation = (): void => {
  // Untyped callers intentionally exercise invalid inputs beyond static TypeScript acceptance.
  const mod: Record<string, any> = {
    Word,
    equalsWord,
    lessWord,
    equalsBox,
    lessBox,
    Money,
    equalsMoney,
    lessMoney,
  };
  const {
    Word: runtimeWord,
    Money: runtimeMoney,
    equalsWord: runtimeEqualsWord,
    lessWord: runtimeLessWord,
    equalsBox: runtimeEqualsBox,
    lessBox: runtimeLessBox,
    equalsMoney: runtimeEqualsMoney,
    lessMoney: runtimeLessMoney,
  } = mod;
  const expect = (label: string, actual: unknown, expected: unknown) => {
    if (actual !== expected) {
      throw new Error(label + ": expected " + expected + ", got " + actual);
    }
  };
  // equals delegates to runtimeWord.equals (case-insensitive) — structural would be false
  expect(
    "equals delegates true",
    runtimeEqualsWord(new runtimeWord("AB"), new runtimeWord("ab")),
    true,
  );
  expect(
    "equals delegates false",
    runtimeEqualsWord(new runtimeWord("ab"), new runtimeWord("cd")),
    false,
  );
  // less delegates to runtimeWord.less (case-insensitive)
  expect(
    "less delegates true",
    runtimeLessWord(new runtimeWord("Apple"), new runtimeWord("banana")),
    true,
  );
  expect(
    "less delegates false",
    runtimeLessWord(new runtimeWord("Banana"), new runtimeWord("apple")),
    false,
  );
  expect(
    "less delegates equal",
    runtimeLessWord(new runtimeWord("Hi"), new runtimeWord("hi")),
    false,
  );
  // nested object delegates to the inner runtimeWord methods after comparing id
  expect(
    "nested equals via word",
    runtimeEqualsBox(
      { id: 1, word: new runtimeWord("X") },
      { id: 1, word: new runtimeWord("x") },
    ),
    true,
  );
  expect(
    "nested equals id differs",
    runtimeEqualsBox(
      { id: 1, word: new runtimeWord("x") },
      { id: 2, word: new runtimeWord("x") },
    ),
    false,
  );
  expect(
    "nested less via word",
    runtimeLessBox(
      { id: 1, word: new runtimeWord("A") },
      { id: 1, word: new runtimeWord("b") },
    ),
    true,
  );
  expect(
    "nested less id decides",
    runtimeLessBox(
      { id: 1, word: new runtimeWord("z") },
      { id: 2, word: new runtimeWord("a") },
    ),
    true,
  );
  // the format() method is ignored; comparison uses amount then currency
  expect(
    "method ignored equals",
    runtimeEqualsMoney(new runtimeMoney(5, "USD"), new runtimeMoney(5, "USD")),
    true,
  );
  expect(
    "method ignored amount",
    runtimeLessMoney(new runtimeMoney(4, "USD"), new runtimeMoney(5, "USD")),
    true,
  );
  expect(
    "method ignored currency",
    runtimeLessMoney(new runtimeMoney(5, "EUR"), new runtimeMoney(5, "USD")),
    true,
  );
};
