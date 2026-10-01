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
 * @evidence contracts/testing.md#behavioral-verification typia.random is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (recursive tuple array depth; createRandom recursive tuple array depth). The case documents its purpose as: Verifies tuple-owned recursive arrays stop at the depth cap.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Recursive tuple helpers carry their owner tuple through array decoding. The array member must therefore receive the same depth guard as object-owned recursive arrays. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (recursive tuple array depth; createRandom recursive tuple array depth) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_random_recursive_tuple_depth is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
