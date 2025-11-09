import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_json_schema_v3_1_ObjectDate = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectDate",
  })(typia.json.schema<ObjectDate, "3.1">());
