import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_llm_parameters_llama_ObjectAlias = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "ObjectAlias",
  })(typia.llm.parameters<ObjectAliasParameters, "llama">());

interface ObjectAliasParameters {
  regular: ObjectAlias;
  nullable: ObjectAlias | null;
  optional: ObjectAlias | undefined;
  faint: ObjectAlias | null | undefined;
  array: Array<ObjectAlias>;
}
