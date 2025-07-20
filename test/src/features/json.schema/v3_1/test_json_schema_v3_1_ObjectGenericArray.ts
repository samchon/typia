import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_json_schema_v3_1_ObjectGenericArray = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectGenericArray",
  })(typia.json.schema<ObjectGenericArray, "3.1">());
