import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_llm_application_gemini_ObjectPartial =
  _test_llm_applicationEquals({
    model: "gemini",
    name: "ObjectPartial",
    factory: ObjectPartial,
  })(
    typia.llm.application<
      ObjectPartialApplication,
      "gemini",
      { equal: true }
    >(),
  );

interface ObjectPartialApplication {
  insert(p: { first: ObjectPartial }): Promise<void>;
  reduce(p: {
    first: ObjectPartial;
    second: ObjectPartial | null;
  }): Promise<ObjectPartial>;
  coalesce(p: {
    first: ObjectPartial | null;
    second: ObjectPartial | null;
    third?: ObjectPartial | null;
  }): Promise<ObjectPartial | null>;
}
