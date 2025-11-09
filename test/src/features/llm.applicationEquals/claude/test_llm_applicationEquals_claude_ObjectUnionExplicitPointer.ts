import typia from "typia";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_ObjectUnionExplicitPointer = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ObjectUnionExplicitPointer",
    factory: ObjectUnionExplicitPointer
  })(
    typia.llm.application<ObjectUnionExplicitPointerApplication, "claude", { equals: true }>(),
  );

interface ObjectUnionExplicitPointerApplication {
  insert(p: { first: ObjectUnionExplicitPointer }): Promise<void>;
  reduce(p: { first: ObjectUnionExplicitPointer, second: ObjectUnionExplicitPointer | null }): Promise<ObjectUnionExplicitPointer>;
  coalesce(p: {
    first: ObjectUnionExplicitPointer | null,
    second: ObjectUnionExplicitPointer | null,
    third?: ObjectUnionExplicitPointer | null,
  }): Promise<ObjectUnionExplicitPointer | null>;
}