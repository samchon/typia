import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_json_application_v3_0_ObjectUnionDouble =
  _test_json_application({
    version: "3.0",
    name: "ObjectUnionDouble",
  })(typia.json.application<ObjectUnionDoubleApplication, "3.0">());

interface ObjectUnionDoubleApplication {
  insert(first: ObjectUnionDouble): Promise<void>;
  reduce(
    first: ObjectUnionDouble,
    second: ObjectUnionDouble | null,
  ): Promise<ObjectUnionDouble>;
  coalesce(
    first: ObjectUnionDouble | null,
    second: ObjectUnionDouble | null,
    third?: ObjectUnionDouble | null,
  ): Promise<ObjectUnionDouble | null>;
}
