import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_llm_parameters_llama_ObjectUnionCompositePointer =
  _test_llm_parameters({
    model: "llama",
    name: "ObjectUnionCompositePointer",
  })(typia.llm.parameters<ObjectUnionCompositePointerParameters, "llama">());

interface ObjectUnionCompositePointerParameters {
  regular: ObjectUnionCompositePointer;
  nullable: ObjectUnionCompositePointer | null;
  optional: ObjectUnionCompositePointer | undefined;
  faint: ObjectUnionCompositePointer | null | undefined;
  array: Array<ObjectUnionCompositePointer>;
}
