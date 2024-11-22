import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_llm_application_3_1_ObjectPartialAndRequired =
  _test_llm_application({
    model: "3.1",
    name: "ObjectPartialAndRequired",
  })(typia.llm.application<ObjectPartialAndRequiredApplication, "3.1">());

interface ObjectPartialAndRequiredApplication {
  insert(first: ObjectPartialAndRequired): Promise<void>;
  reduce(
    first: ObjectPartialAndRequired,
    second: ObjectPartialAndRequired | null,
  ): Promise<ObjectPartialAndRequired>;
  coalesce(
    first: ObjectPartialAndRequired | null,
    second: ObjectPartialAndRequired | null,
    third?: ObjectPartialAndRequired | null,
  ): Promise<ObjectPartialAndRequired | null>;
}
