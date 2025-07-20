import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_llm_parameters_llama_ObjectDescription = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "ObjectDescription",
  })(typia.llm.parameters<ObjectDescriptionParameters, "llama">());

interface ObjectDescriptionParameters {
  regular: ObjectDescription;
  nullable: ObjectDescription | null;
  optional: ObjectDescription | undefined;
  faint: ObjectDescription | null | undefined;
  array: Array<ObjectDescription>;
}
