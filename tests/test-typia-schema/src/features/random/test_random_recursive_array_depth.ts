import { TestValidator } from "@nestia/e2e";
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
  TestValidator.equals("direct recursive array depth", arrayDepth(direct), 6);

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
  TestValidator.equals(
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
  TestValidator.equals(
    "direct recursive maxItems schema",
    recursiveMaxItems,
    0,
  );
  TestValidator.equals("direct recursive maxItems custom", emptyRecursive, []);
  TestValidator.equals(
    "direct recursive maxItems default",
    typia.random<IRecursiveEmptyArray>(),
    [],
  );
  TestValidator.equals(
    "createRandom direct recursive maxItems default",
    typia.createRandom<IRecursiveEmptyArray>()(),
    [],
  );
};

type IRecursiveArray = IRecursiveArray[];

type IRecursiveEmptyArray = IRecursiveEmptyArray[] & tags.MaxItems<0>;

const arrayDepth = (value: IRecursiveArray): number =>
  value.length === 0 ? 0 : 1 + arrayDepth(value[0]!);
