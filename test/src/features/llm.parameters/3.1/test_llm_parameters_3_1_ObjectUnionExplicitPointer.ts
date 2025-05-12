import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_llm_parameters_3_1_ObjectUnionExplicitPointer =
  _test_llm_parameters({
    model: "3.1",
    name: "ObjectUnionExplicitPointer",
  })(typia.llm.parameters<ObjectUnionExplicitPointerParameters, "3.1">());

interface ObjectUnionExplicitPointerParameters {
  regular: ObjectUnionExplicitPointer;
  nullable: ObjectUnionExplicitPointer | null;
  optional: ObjectUnionExplicitPointer | undefined;
  faint: ObjectUnionExplicitPointer | null | undefined;
  array: Array<ObjectUnionExplicitPointer>;
}
