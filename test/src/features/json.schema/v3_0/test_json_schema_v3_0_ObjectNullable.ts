import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_json_schema_v3_0_ObjectNullable = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectNullable",
  })(typia.json.schema<ObjectNullable, "3.0">());
