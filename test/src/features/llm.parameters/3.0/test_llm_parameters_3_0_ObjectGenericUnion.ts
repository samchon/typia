import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_llm_parameters_3_0_ObjectGenericUnion = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ObjectGenericUnion",
  })(typia.llm.parameters<ObjectGenericUnionParameters, "3.0">());

interface ObjectGenericUnionParameters {
  regular: ObjectGenericUnion;
  nullable: ObjectGenericUnion | null;
  optional: ObjectGenericUnion | undefined;
  faint: ObjectGenericUnion | null | undefined;
  array: Array<ObjectGenericUnion>;
}
