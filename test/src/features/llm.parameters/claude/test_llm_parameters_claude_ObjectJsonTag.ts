import typia from "typia";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_ObjectJsonTag = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ObjectJsonTag",
  })(
    typia.llm.parameters<ObjectJsonTagParameters, "claude">(),
  );

interface ObjectJsonTagParameters {
  regular: ObjectJsonTag;
  nullable: ObjectJsonTag | null;
  optional: ObjectJsonTag | undefined;
  faint: ObjectJsonTag | null | undefined;
  array: Array<ObjectJsonTag>;
}