import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies direct recursive random arrays stop at the depth cap.
 *
 * Direct recursive array aliases use generated array helper functions. The
 * helper call must increment `_depth`, and explicit empty constraints still
 * have to reach both custom and default generators.
 *
 * 1. Force a recursive array alias to emit one element per level.
 * 2. Require every custom array call to receive `recursive: true`.
 * 3. Require generation to stop at the transform depth cap through both APIs.
 * 4. Generate a recursive `MaxItems<0>` alias with custom and default random.
 *
 * @evidence contracts/testing.md#behavioral-verification A supported one-element array generator observes recursive=true and must reach depth6 in both direct/factory forms; MaxItems0 yields empty arrays for custom and default generators.
 * @evidence contracts/testing.md#independent-expectations Independent arrayDepth and literal empty-array comparisons establish cutoff6 and zero bounds. Metadata observations inspect the callback schema rather than inferring it from generated output.
 * @evidence contracts/testing.md#distinguishing-cases Forced growth, exact cutoff, recursive zero maximum, and custom/default/direct/factory combinations retain the original distinctions.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_recursive_array_depth in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_random_recursive_array_depth = (): void => {
  const directRecursiveFlags: Array<boolean | undefined> = [];
  const direct: IRecursiveArray = typia.random<IRecursiveArray>({
    array: (schema) => {
      directRecursiveFlags.push(schema.recursive);
      return new Array(1)
        .fill(null)
        .map((_, index) => schema.element(index, 1));
    },
  });
  TestValidator.predicate(
    "direct recursive array schema",
    () =>
      directRecursiveFlags.length !== 0 &&
      directRecursiveFlags.every((recursive) => recursive === true),
  );
  TestEquality.equals("direct recursive array depth", arrayDepth(direct), 6);

  const createRecursiveFlags: Array<boolean | undefined> = [];
  const createDirect = typia.createRandom<IRecursiveArray>({
    array: (schema) => {
      createRecursiveFlags.push(schema.recursive);
      return new Array(1)
        .fill(null)
        .map((_, index) => schema.element(index, 1));
    },
  });
  const createdDirect: IRecursiveArray = createDirect();
  TestValidator.predicate(
    "createRandom direct recursive array schema",
    () =>
      createRecursiveFlags.length !== 0 &&
      createRecursiveFlags.every((recursive) => recursive === true),
  );
  TestEquality.equals(
    "createRandom direct recursive array depth",
    arrayDepth(createdDirect),
    6,
  );

  let recursiveMaxItems: number | undefined;
  const emptyRecursive: IRecursiveEmptyArray =
    typia.random<IRecursiveEmptyArray>({
      array: (schema) => {
        recursiveMaxItems = schema.maxItems;
        const count: number = schema.maxItems ?? 1;
        return new Array(count)
          .fill(null)
          .map((_, index) => schema.element(index, count));
      },
    });
  TestEquality.equals("direct recursive maxItems schema", recursiveMaxItems, 0);
  TestEquality.equals("direct recursive maxItems custom", emptyRecursive, []);
  TestEquality.equals(
    "direct recursive maxItems default",
    typia.random<IRecursiveEmptyArray>(),
    [],
  );
  TestEquality.equals(
    "createRandom direct recursive maxItems default",
    typia.createRandom<IRecursiveEmptyArray>()(),
    [],
  );
};

type IRecursiveArray = IRecursiveArray[];

type IRecursiveEmptyArray = IRecursiveEmptyArray[] & tags.MaxItems<0>;

const arrayDepth = (value: IRecursiveArray): number =>
  value.length === 0 ? 0 : 1 + arrayDepth(value[0]!);
