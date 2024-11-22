import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_json_application_v3_0_ObjectPartialAndRequired =
  _test_json_application({
    version: "3.0",
    name: "ObjectPartialAndRequired",
  })(typia.json.application<ObjectPartialAndRequiredApplication, "3.0">());

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
