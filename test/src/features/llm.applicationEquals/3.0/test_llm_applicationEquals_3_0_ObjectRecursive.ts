import typia from "typia";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_3_0_ObjectRecursive = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "ObjectRecursive",
    factory: ObjectRecursive
  })(
    typia.llm.application<ObjectRecursiveApplication, "3.0", { equals: true }>(),
  );

interface ObjectRecursiveApplication {
  insert(p: { first: ObjectRecursive }): Promise<void>;
  reduce(p: { first: ObjectRecursive, second: ObjectRecursive | null }): Promise<ObjectRecursive>;
  coalesce(p: {
    first: ObjectRecursive | null,
    second: ObjectRecursive | null,
    third?: ObjectRecursive | null,
  }): Promise<ObjectRecursive | null>;
}