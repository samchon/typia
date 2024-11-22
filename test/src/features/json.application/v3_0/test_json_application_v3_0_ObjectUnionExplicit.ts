import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_json_application_v3_0_ObjectUnionExplicit =
  _test_json_application({
    version: "3.0",
    name: "ObjectUnionExplicit",
  })(typia.json.application<ObjectUnionExplicitApplication, "3.0">());

interface ObjectUnionExplicitApplication {
  insert(first: ObjectUnionExplicit): Promise<void>;
  reduce(
    first: ObjectUnionExplicit,
    second: ObjectUnionExplicit | null,
  ): Promise<ObjectUnionExplicit>;
  coalesce(
    first: ObjectUnionExplicit | null,
    second: ObjectUnionExplicit | null,
    third?: ObjectUnionExplicit | null,
  ): Promise<ObjectUnionExplicit | null>;
}
