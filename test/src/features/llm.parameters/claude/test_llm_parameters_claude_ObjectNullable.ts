import typia from "typia";
import { ObjectNullable } from "../../../structures/ObjectNullable";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_ObjectNullable = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ObjectNullable",
  })(
    typia.llm.parameters<ObjectNullableParameters, "claude">(),
  );

interface ObjectNullableParameters {
  regular: ObjectNullable;
  nullable: ObjectNullable | null;
  optional: ObjectNullable | undefined;
  faint: ObjectNullable | null | undefined;
  array: Array<ObjectNullable>;
}