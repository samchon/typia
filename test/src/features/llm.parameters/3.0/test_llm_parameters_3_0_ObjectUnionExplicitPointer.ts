import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_llm_parameters_3_0_ObjectUnionExplicitPointer =
  _test_llm_parameters({
    model: "3.0",
    name: "ObjectUnionExplicitPointer",
  })(typia.llm.parameters<ObjectUnionExplicitPointerParameters, "3.0">());

interface ObjectUnionExplicitPointerParameters {
  regular: ObjectUnionExplicitPointer;
  nullable: ObjectUnionExplicitPointer | null;
  optional: ObjectUnionExplicitPointer | undefined;
  faint: ObjectUnionExplicitPointer | null | undefined;
  array: Array<ObjectUnionExplicitPointer>;
}
