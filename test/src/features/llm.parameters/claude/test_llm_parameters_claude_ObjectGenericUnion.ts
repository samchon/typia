import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_llm_parameters_claude_ObjectGenericUnion =
  _test_llm_parameters({
    model: "claude",
    name: "ObjectGenericUnion",
  })(typia.llm.parameters<ObjectGenericUnionParameters, "claude">());

interface ObjectGenericUnionParameters {
  regular: ObjectGenericUnion;
  nullable: ObjectGenericUnion | null;
  optional: ObjectGenericUnion | undefined;
  faint: ObjectGenericUnion | null | undefined;
  array: Array<ObjectGenericUnion>;
}
