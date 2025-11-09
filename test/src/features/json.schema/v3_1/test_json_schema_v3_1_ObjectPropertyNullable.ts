import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_json_schema_v3_1_ObjectPropertyNullable = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectPropertyNullable",
  })(typia.json.schema<ObjectPropertyNullable, "3.1">());
