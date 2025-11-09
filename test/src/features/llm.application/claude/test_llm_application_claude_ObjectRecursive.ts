import typia from "typia";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_claude_ObjectRecursive = (): void =>
  _test_llm_application({
    model: "claude",
    name: "ObjectRecursive",
    factory: ObjectRecursive
  })(
    typia.llm.application<ObjectRecursiveApplication, "claude">(),
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