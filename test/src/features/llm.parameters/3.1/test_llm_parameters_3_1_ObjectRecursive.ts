import typia from "typia";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_ObjectRecursive = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "ObjectRecursive",
  })(
    typia.llm.parameters<ObjectRecursiveParameters, "3.1">(),
  );

interface ObjectRecursiveParameters {
  regular: ObjectRecursive;
  nullable: ObjectRecursive | null;
  optional: ObjectRecursive | undefined;
  faint: ObjectRecursive | null | undefined;
  array: Array<ObjectRecursive>;
}