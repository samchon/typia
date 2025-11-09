import typia from "typia";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_ObjectUnionExplicitPointer = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectUnionExplicitPointer",
    factory: ObjectUnionExplicitPointer
  })(
    typia.llm.application<ObjectUnionExplicitPointerApplication, "chatgpt">(),
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