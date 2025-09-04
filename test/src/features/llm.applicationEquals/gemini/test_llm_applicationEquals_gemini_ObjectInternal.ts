import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_llm_applicationEquals_gemini_ObjectInternal = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "ObjectInternal",
    factory: ObjectInternal,
  })(
    typia.llm.application<
      ObjectInternalApplication,
      "gemini",
      { equals: true }
    >(),
  );

interface ObjectInternalApplication {
  insert(p: { first: ObjectInternal }): Promise<void>;
  reduce(p: {
    first: ObjectInternal;
    second: ObjectInternal | null;
  }): Promise<ObjectInternal>;
  coalesce(p: {
    first: ObjectInternal | null;
    second: ObjectInternal | null;
    third?: ObjectInternal | null;
  }): Promise<ObjectInternal | null>;
}
