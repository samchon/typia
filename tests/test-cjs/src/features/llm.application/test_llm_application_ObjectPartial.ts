import typia from "typia";

import { _test_llm_application } from "../../internal/_test_llm_application";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_llm_application_ObjectPartial = (): void =>
  _test_llm_application({
    name: "ObjectPartial",
    factory: ObjectPartial,
  })(typia.llm.application<ObjectPartialApplication>());

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
