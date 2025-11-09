import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_llm_parameters_3_0_ObjectUnionCompositePointer = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ObjectUnionCompositePointer",
  })(typia.llm.parameters<ObjectUnionCompositePointerParameters, "3.0">());

interface ObjectUnionCompositePointerParameters {
  regular: ObjectUnionCompositePointer;
  nullable: ObjectUnionCompositePointer | null;
  optional: ObjectUnionCompositePointer | undefined;
  faint: ObjectUnionCompositePointer | null | undefined;
  array: Array<ObjectUnionCompositePointer>;
}
