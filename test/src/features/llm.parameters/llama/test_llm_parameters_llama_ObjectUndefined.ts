import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_llm_parameters_llama_ObjectUndefined = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "ObjectUndefined",
  })(typia.llm.parameters<ObjectUndefinedParameters, "llama">());

interface ObjectUndefinedParameters {
  regular: ObjectUndefined;
  nullable: ObjectUndefined | null;
  optional: ObjectUndefined | undefined;
  faint: ObjectUndefined | null | undefined;
  array: Array<ObjectUndefined>;
}
