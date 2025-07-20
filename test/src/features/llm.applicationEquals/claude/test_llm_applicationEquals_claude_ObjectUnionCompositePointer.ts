import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_llm_applicationEquals_claude_ObjectUnionCompositePointer =
  (): void =>
    _test_llm_applicationEquals({
      model: "claude",
      name: "ObjectUnionCompositePointer",
      factory: ObjectUnionCompositePointer,
    })(
      typia.llm.application<
        ObjectUnionCompositePointerApplication,
        "claude",
        { equals:; true }
      >(),
    );

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
