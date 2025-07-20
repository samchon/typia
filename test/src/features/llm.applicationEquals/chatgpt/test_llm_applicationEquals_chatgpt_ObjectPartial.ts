import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_llm_applicationEquals_chatgpt_ObjectPartial = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ObjectPartial",
    factory: ObjectPartial,
  })(
    typia.llm.application<
      ObjectPartialApplication,
      "chatgpt",
      { equals:; true }
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
