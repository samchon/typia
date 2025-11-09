import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_llm_parameters_chatgpt_ObjectPartial = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "ObjectPartial",
  })(typia.llm.parameters<ObjectPartialParameters, "chatgpt">());

interface ObjectPartialParameters {
  regular: ObjectPartial;
  nullable: ObjectPartial | null;
  optional: ObjectPartial | undefined;
  faint: ObjectPartial | null | undefined;
  array: Array<ObjectPartial>;
}
