import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_llm_parameters_3_1_ObjectUnionExplicit = _test_llm_parameters(
  {
    model: "3.1",
    name: "ObjectUnionExplicit",
  },
)(typia.llm.parameters<ObjectUnionExplicitParameters, "3.1">());

interface ObjectUnionExplicitParameters {
  regular: ObjectUnionExplicit;
  nullable: ObjectUnionExplicit | null;
  optional: ObjectUnionExplicit | undefined;
  faint: ObjectUnionExplicit | null | undefined;
  array: Array<ObjectUnionExplicit>;
}
