import { TestStructure } from "@typia/template";
import { isErrorClass } from "@typia/template/error-class";
import { preparePrune } from "@typia/template/prune";
import typia, { TypeGuardError } from "typia";

/**
 * Verifies plain.assertPrune through its supplied operation and fixture.
 *
 * Clean mutation checks delegate to preparePrune, while a separate spoiler loop
 * retains operation-specific thrown diagnostics and independent fresh values.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/common.md#principled-implementation preparePrune captures valid graph data and injects surplus keys; the real pruner must remove those keys while preserving valid data, references, prototypes and array lengths. Each authored value spoiler must throw the selected exact error prototype, satisfy native property checks and report one allowed path. Pre-call authored graph snapshots and helper-owned surplus keys establish clean expectations. Spoilers supply invalid values/paths independently; native typia.is error shape is correlated, while exact prototype identity is independent.
 * @evidence contracts/common.md#clear-and-simple-design Clean mutation checks delegate to preparePrune, while a separate spoiler loop retains operation-specific thrown diagnostics and independent fresh values.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The actual supplied callback is executed without substituting a verdict. ObjectSimple supplies a clean pruning graph and all declared invalid-value mutations. The shared portable prune units own destructive/no-op callbacks and graph boundaries; this wrapper does not assert return identity.
 * @evidence contracts/common.md#meaningful-documentation The introduction and scenario list identify this helper's assertion responsibility; the answers state its exact comparisons, executable owner and oracle limitations.
 * @evidence contracts/testing.md#behavioral-verification preparePrune captures valid graph data and injects surplus keys; the real pruner must remove those keys while preserving valid data, references, prototypes and array lengths. Each authored value spoiler must throw the selected exact error prototype, satisfy native property checks and report one allowed path.
 * @evidence contracts/testing.md#independent-expectations Pre-call authored graph snapshots and helper-owned surplus keys establish clean expectations. Spoilers supply invalid values/paths independently; native typia.is error shape is correlated, while exact prototype identity is independent.
 * @evidence contracts/testing.md#distinguishing-cases ObjectSimple supplies a clean pruning graph and all declared invalid-value mutations. The shared portable prune units own destructive/no-op callbacks and graph boundaries; this wrapper does not assert return identity.
 * @evidence contracts/testing.md#execution-ownership Committed test_plain_assertPrune_ObjectSimple owns the native callback and discovery. Full generated assertPrune families are disabled; this helper preserves their current composite assertion behavior.
 */
export const _test_plain_assertPrune =
  (ErrorClass: Function) =>
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (prune: (input: T) => T): void => {
    const input: T = factory.generate();

    const check = preparePrune(
      input,
      `Bug on typia.plain.isPrune(): failed to prune the ${name} type.`,
    );
    prune(input);
    check();

    // SPOIL
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      try {
        prune(elem);
      } catch (exp) {
        if (
          isErrorClass(exp, ErrorClass) &&
          typia.is<TypeGuardError.IProps>(exp)
        )
          if (exp.path && expected.includes(exp.path) === true) continue;
          else
            console.log({
              expected,
              actual: exp.path,
            });
      }
      throw new Error(
        `Bug on typia.plain.assertPrune(): failed to detect error on the ${name} type.`,
      );
    }
  };
