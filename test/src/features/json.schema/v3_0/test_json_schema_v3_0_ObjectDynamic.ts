import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_json_schema_v3_0_ObjectDynamic = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectDynamic",
  })(typia.json.schema<ObjectDynamic, "3.0">());
