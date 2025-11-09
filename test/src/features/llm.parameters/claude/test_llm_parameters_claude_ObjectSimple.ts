import typia from "typia";
import { ObjectSimple } from "../../../structures/ObjectSimple";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_ObjectSimple = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ObjectSimple",
  })(
    typia.llm.parameters<ObjectSimpleParameters, "claude">(),
  );

interface ObjectSimpleParameters {
  regular: ObjectSimple;
  nullable: ObjectSimple | null;
  optional: ObjectSimple | undefined;
  faint: ObjectSimple | null | undefined;
  array: Array<ObjectSimple>;
}