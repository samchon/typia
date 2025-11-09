import typia from "typia";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_1_ObjectRecursive = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "ObjectRecursive",
    factory: ObjectRecursive
  })(
    typia.llm.application<ObjectRecursiveApplication, "3.1">(),
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