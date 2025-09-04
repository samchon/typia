import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_llm_application_llama_ObjectUnionExplicitPointer = (): void =>
  _test_llm_application({
    model: "llama",
    name: "ObjectUnionExplicitPointer",
    factory: ObjectUnionExplicitPointer,
  })(typia.llm.application<ObjectUnionExplicitPointerApplication, "llama">());

interface ObjectUnionExplicitPointerApplication {
  insert(p: { first: ObjectUnionExplicitPointer }): Promise<void>;
  reduce(p: {
    first: ObjectUnionExplicitPointer;
    second: ObjectUnionExplicitPointer | null;
  }): Promise<ObjectUnionExplicitPointer>;
  coalesce(p: {
    first: ObjectUnionExplicitPointer | null;
    second: ObjectUnionExplicitPointer | null;
    third?: ObjectUnionExplicitPointer | null;
  }): Promise<ObjectUnionExplicitPointer | null>;
}
