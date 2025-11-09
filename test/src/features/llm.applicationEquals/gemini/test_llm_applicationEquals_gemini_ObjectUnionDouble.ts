import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_llm_applicationEquals_gemini_ObjectUnionDouble = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "ObjectUnionDouble",
    factory: ObjectUnionDouble,
  })(
    typia.llm.application<
      ObjectUnionDoubleApplication,
      "gemini",
      { equals: true }
    >(),
  );

interface ObjectUnionDoubleApplication {
  insert(p: { first: ObjectUnionDouble }): Promise<void>;
  reduce(p: {
    first: ObjectUnionDouble;
    second: ObjectUnionDouble | null;
  }): Promise<ObjectUnionDouble>;
  coalesce(p: {
    first: ObjectUnionDouble | null;
    second: ObjectUnionDouble | null;
    third?: ObjectUnionDouble | null;
  }): Promise<ObjectUnionDouble | null>;
}
