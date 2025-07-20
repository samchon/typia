import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_llm_parameters_chatgpt_ObjectUndefined = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "ObjectUndefined",
  })(typia.llm.parameters<ObjectUndefinedParameters, "chatgpt">());

interface ObjectUndefinedParameters {
  regular: ObjectUndefined;
  nullable: ObjectUndefined | null;
  optional: ObjectUndefined | undefined;
  faint: ObjectUndefined | null | undefined;
  array: Array<ObjectUndefined>;
}
