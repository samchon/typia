import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_llm_parameters_3_0_ObjectUnionImplicit = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ObjectUnionImplicit",
  })(typia.llm.parameters<ObjectUnionImplicitParameters, "3.0">());

interface ObjectUnionImplicitParameters {
  regular: ObjectUnionImplicit;
  nullable: ObjectUnionImplicit | null;
  optional: ObjectUnionImplicit | undefined;
  faint: ObjectUnionImplicit | null | undefined;
  array: Array<ObjectUnionImplicit>;
}
