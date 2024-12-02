import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_llm_parameters_3_0_ObjectAlias = _test_llm_parameters({
  model: "3.0",
  name: "ObjectAlias",
})(typia.llm.parameters<ObjectAliasParameters, "3.0">());

interface ObjectAliasParameters {
  regular: ObjectAlias;
  nullable: ObjectAlias | null;
  optional: ObjectAlias | undefined;
  faint: ObjectAlias | null | undefined;
  array: Array<ObjectAlias>;
}
