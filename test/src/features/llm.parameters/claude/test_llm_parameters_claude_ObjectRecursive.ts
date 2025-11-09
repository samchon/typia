import typia from "typia";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_ObjectRecursive = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ObjectRecursive",
  })(
    typia.llm.parameters<ObjectRecursiveParameters, "claude">(),
  );

interface ObjectRecursiveParameters {
  regular: ObjectRecursive;
  nullable: ObjectRecursive | null;
  optional: ObjectRecursive | undefined;
  faint: ObjectRecursive | null | undefined;
  array: Array<ObjectRecursive>;
}