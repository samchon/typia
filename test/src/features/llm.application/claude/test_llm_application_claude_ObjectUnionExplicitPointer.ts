import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_llm_application_claude_ObjectUnionExplicitPointer =
  _test_llm_application({
    model: "claude",
    name: "ObjectUnionExplicitPointer",
  })(typia.llm.application<ObjectUnionExplicitPointerApplication, "claude">());

interface ObjectUnionExplicitPointerApplication {
  insert(first: ObjectUnionExplicitPointer): Promise<void>;
  reduce(
    first: ObjectUnionExplicitPointer,
    second: ObjectUnionExplicitPointer | null,
  ): Promise<ObjectUnionExplicitPointer>;
  coalesce(
    first: ObjectUnionExplicitPointer | null,
    second: ObjectUnionExplicitPointer | null,
    third?: ObjectUnionExplicitPointer | null,
  ): Promise<ObjectUnionExplicitPointer | null>;
}
