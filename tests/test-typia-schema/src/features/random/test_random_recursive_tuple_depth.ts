import { TestValidator } from "@nestia/e2e";
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
 */
export const test_random_recursive_tuple_depth = (): void => {
  const value: IRecursiveTuple = typia.random<IRecursiveTuple>({
    array: (schema) =>
      new Array(1).fill(null).map((_, index) => schema.element(index, 1)),
  });
  TestValidator.equals("recursive tuple array depth", tupleDepth(value), 6);

  const createValue = typia.createRandom<IRecursiveTuple>({
    array: (schema) =>
      new Array(1).fill(null).map((_, index) => schema.element(index, 1)),
  });
  TestValidator.equals(
    "createRandom recursive tuple array depth",
    tupleDepth(createValue()),
    6,
  );
};

type IRecursiveTuple = [IRecursiveTuple[]];

const tupleDepth = (value: IRecursiveTuple): number =>
  value[0].length === 0 ? 0 : 1 + tupleDepth(value[0][0]!);
