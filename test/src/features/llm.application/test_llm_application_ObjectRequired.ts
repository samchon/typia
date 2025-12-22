import typia from "typia";

import { _test_llm_application } from "../../internal/_test_llm_application";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_llm_application_ObjectRequired = (): void =>
  _test_llm_application({
    name: "ObjectRequired",
    factory: ObjectRequired,
  })(typia.llm.application<ObjectRequiredApplication>());

interface ObjectRequiredApplication {
  insert(p: { first: ObjectRequired }): Promise<void>;
  reduce(p: {
    first: ObjectRequired;
    second: ObjectRequired | null;
  }): Promise<ObjectRequired>;
  coalesce(p: {
    first: ObjectRequired | null;
    second: ObjectRequired | null;
    third?: ObjectRequired | null;
  }): Promise<ObjectRequired | null>;
}
