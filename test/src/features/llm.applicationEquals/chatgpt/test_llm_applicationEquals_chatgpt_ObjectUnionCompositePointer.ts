import typia from "typia";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_chatgpt_ObjectUnionCompositePointer = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ObjectUnionCompositePointer",
    factory: ObjectUnionCompositePointer
  })(
    typia.llm.application<ObjectUnionCompositePointerApplication, "chatgpt", { equals: true }>(),
  );

interface ObjectUnionCompositePointerApplication {
  insert(p: { first: ObjectUnionCompositePointer }): Promise<void>;
  reduce(p: { first: ObjectUnionCompositePointer, second: ObjectUnionCompositePointer | null }): Promise<ObjectUnionCompositePointer>;
  coalesce(p: {
    first: ObjectUnionCompositePointer | null,
    second: ObjectUnionCompositePointer | null,
    third?: ObjectUnionCompositePointer | null,
  }): Promise<ObjectUnionCompositePointer | null>;
}