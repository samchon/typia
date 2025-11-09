import typia from "typia";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_0_ObjectJsonTag = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ObjectJsonTag",
  })(
    typia.llm.parameters<ObjectJsonTagParameters, "3.0">(),
  );

interface ObjectJsonTagParameters {
  regular: ObjectJsonTag;
  nullable: ObjectJsonTag | null;
  optional: ObjectJsonTag | undefined;
  faint: ObjectJsonTag | null | undefined;
  array: Array<ObjectJsonTag>;
}