import typia from "typia";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_ObjectUndefined = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ObjectUndefined",
  })(
    typia.llm.parameters<ObjectUndefinedParameters, "claude">(),
  );

interface ObjectUndefinedParameters {
  regular: ObjectUndefined;
  nullable: ObjectUndefined | null;
  optional: ObjectUndefined | undefined;
  faint: ObjectUndefined | null | undefined;
  array: Array<ObjectUndefined>;
}