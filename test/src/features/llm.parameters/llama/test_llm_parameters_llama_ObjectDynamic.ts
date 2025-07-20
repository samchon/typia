import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_llm_parameters_llama_ObjectDynamic = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "ObjectDynamic",
  })(typia.llm.parameters<ObjectDynamicParameters, "llama">());

interface ObjectDynamicParameters {
  regular: ObjectDynamic;
  nullable: ObjectDynamic | null;
  optional: ObjectDynamic | undefined;
  faint: ObjectDynamic | null | undefined;
  array: Array<ObjectDynamic>;
}
