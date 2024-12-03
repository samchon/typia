import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_llm_parameters_3_0_ObjectGenericAlias = _test_llm_parameters({
  model: "3.0",
  name: "ObjectGenericAlias",
})(typia.llm.parameters<ObjectGenericAliasParameters, "3.0">());

interface ObjectGenericAliasParameters {
  regular: ObjectGenericAlias;
  nullable: ObjectGenericAlias | null;
  optional: ObjectGenericAlias | undefined;
  faint: ObjectGenericAlias | null | undefined;
  array: Array<ObjectGenericAlias>;
}
