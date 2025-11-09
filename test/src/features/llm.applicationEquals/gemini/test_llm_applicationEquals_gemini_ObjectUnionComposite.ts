import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_llm_applicationEquals_gemini_ObjectUnionComposite =
  (): void =>
    _test_llm_applicationEquals({
      model: "gemini",
      name: "ObjectUnionComposite",
      factory: ObjectUnionComposite,
    })(
      typia.llm.application<
        ObjectUnionCompositeApplication,
        "gemini",
        { equals: true }
      >(),
    );

interface ObjectUnionCompositeApplication {
  insert(p: { first: ObjectUnionComposite }): Promise<void>;
  reduce(p: {
    first: ObjectUnionComposite;
    second: ObjectUnionComposite | null;
  }): Promise<ObjectUnionComposite>;
  coalesce(p: {
    first: ObjectUnionComposite | null;
    second: ObjectUnionComposite | null;
    third?: ObjectUnionComposite | null;
  }): Promise<ObjectUnionComposite | null>;
}
