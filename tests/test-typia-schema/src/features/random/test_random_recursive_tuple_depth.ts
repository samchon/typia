import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies tuple-owned recursive arrays stop at the depth cap.
 *
 * Recursive tuple helpers carry their owner tuple through array decoding. The
 * array member must therefore receive the same depth guard as object-owned
 * recursive arrays.
 *
 * 1. Generate a recursive tuple whose only element is an array of itself.
 * 2. Force every array generator call to emit one element.
 * 3. Require generation to terminate at the transform depth cap.
 * 4. Repeat the same assertion through `typia.createRandom`.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct/factory custom array callbacks grow a tuple-wrapped recursive array and its independent tupleDepth must equal6.
 * @evidence contracts/testing.md#independent-expectations The handwritten traversal counts tuple-contained recursion and compares to literal cutoff6; no generated validator supplies the expected depth.
 * @evidence contracts/testing.md#distinguishing-cases Tuple wrapping distinguishes recursion bookkeeping from direct array helpers; both public forms retain the exact depth verdict.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_recursive_tuple_depth in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_random_recursive_tuple_depth = (): void => {
  const value: IRecursiveTuple = typia.random<IRecursiveTuple>({
    array: (schema) =>
      new Array(1).fill(null).map((_, index) => schema.element(index, 1)),
  });
  TestEquality.equals("recursive tuple array depth", tupleDepth(value), 6);

  const createValue = typia.createRandom<IRecursiveTuple>({
    array: (schema) =>
      new Array(1).fill(null).map((_, index) => schema.element(index, 1)),
  });
  TestEquality.equals(
    "createRandom recursive tuple array depth",
    tupleDepth(createValue()),
    6,
  );
};

type IRecursiveTuple = [IRecursiveTuple[]];

const tupleDepth = (value: IRecursiveTuple): number =>
  value[0].length === 0 ? 0 : 1 + tupleDepth(value[0][0]!);
