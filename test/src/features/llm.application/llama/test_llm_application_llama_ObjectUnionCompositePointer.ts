import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_llm_application_llama_ObjectUnionCompositePointer =
  _test_llm_application({
    model: "llama",
    name: "ObjectUnionCompositePointer",
  })(typia.llm.application<ObjectUnionCompositePointerApplication, "llama">());

interface ObjectUnionCompositePointerApplication {
  insert(first: ObjectUnionCompositePointer): Promise<void>;
  reduce(
    first: ObjectUnionCompositePointer,
    second: ObjectUnionCompositePointer | null,
  ): Promise<ObjectUnionCompositePointer>;
  coalesce(
    first: ObjectUnionCompositePointer | null,
    second: ObjectUnionCompositePointer | null,
    third?: ObjectUnionCompositePointer | null,
  ): Promise<ObjectUnionCompositePointer | null>;
}
