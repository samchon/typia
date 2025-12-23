import typia from "typia";

import { _test_llm_application } from "../../internal/_test_llm_application";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_llm_application_ObjectUnionCompositePointer = (): void =>
  _test_llm_application({
    name: "ObjectUnionCompositePointer",
    factory: ObjectUnionCompositePointer,
  })(typia.llm.application<ObjectUnionCompositePointerApplication>());

interface ObjectUnionCompositePointerApplication {
  insert(p: { first: ObjectUnionCompositePointer }): Promise<void>;
  reduce(p: {
    first: ObjectUnionCompositePointer;
    second: ObjectUnionCompositePointer | null;
  }): Promise<ObjectUnionCompositePointer>;
  coalesce(p: {
    first: ObjectUnionCompositePointer | null;
    second: ObjectUnionCompositePointer | null;
    third?: ObjectUnionCompositePointer | null;
  }): Promise<ObjectUnionCompositePointer | null>;
}
