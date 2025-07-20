import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_llm_applicationEquals_3_0_ObjectUnionExplicitPointer =
  (): void =>
    _test_llm_applicationEquals({
      model: "3.0",
      name: "ObjectUnionExplicitPointer",
      factory: ObjectUnionExplicitPointer,
    })(
      typia.llm.application<
        ObjectUnionExplicitPointerApplication,
        "3.0",
        { equals: true }
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
