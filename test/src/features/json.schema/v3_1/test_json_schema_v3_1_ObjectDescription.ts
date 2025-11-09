import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_json_schema_v3_1_ObjectDescription = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectDescription",
  })(typia.json.schema<ObjectDescription, "3.1">());
