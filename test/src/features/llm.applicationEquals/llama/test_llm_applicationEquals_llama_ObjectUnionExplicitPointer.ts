import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_llm_applicationEquals_llama_ObjectUnionExplicitPointer =
  (): void =>
    _test_llm_applicationEquals({
      model: "llama",
      name: "ObjectUnionExplicitPointer",
      factory: ObjectUnionExplicitPointer,
    })(
      typia.llm.application<
        ObjectUnionExplicitPointerApplication,
        "llama",
        { equals:; true }
      >(),
    );

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
