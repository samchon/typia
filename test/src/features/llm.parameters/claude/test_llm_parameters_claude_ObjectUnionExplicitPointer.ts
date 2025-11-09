import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_llm_parameters_claude_ObjectUnionExplicitPointer = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ObjectUnionExplicitPointer",
  })(typia.llm.parameters<ObjectUnionExplicitPointerParameters, "claude">());

interface ObjectUnionExplicitPointerParameters {
  regular: ObjectUnionExplicitPointer;
  nullable: ObjectUnionExplicitPointer | null;
  optional: ObjectUnionExplicitPointer | undefined;
  faint: ObjectUnionExplicitPointer | null | undefined;
  array: Array<ObjectUnionExplicitPointer>;
}
