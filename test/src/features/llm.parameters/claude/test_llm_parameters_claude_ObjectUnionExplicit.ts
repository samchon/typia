import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_llm_parameters_claude_ObjectUnionExplicit =
  _test_llm_parameters({
    model: "claude",
    name: "ObjectUnionExplicit",
  })(typia.llm.parameters<ObjectUnionExplicitParameters, "claude">());

interface ObjectUnionExplicitParameters {
  regular: ObjectUnionExplicit;
  nullable: ObjectUnionExplicit | null;
  optional: ObjectUnionExplicit | undefined;
  faint: ObjectUnionExplicit | null | undefined;
  array: Array<ObjectUnionExplicit>;
}
