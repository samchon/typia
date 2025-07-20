import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_llm_parameters_llama_ObjectJsonTag = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "ObjectJsonTag",
  })(typia.llm.parameters<ObjectJsonTagParameters, "llama">());

interface ObjectJsonTagParameters {
  regular: ObjectJsonTag;
  nullable: ObjectJsonTag | null;
  optional: ObjectJsonTag | undefined;
  faint: ObjectJsonTag | null | undefined;
  array: Array<ObjectJsonTag>;
}
