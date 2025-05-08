import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_schema_v3_1_ObjectGenericAlias = _test_json_schema({
  version: "3.1",
  name: "ObjectGenericAlias",
})(typia.json.schema<ObjectGenericAlias, "3.1">());
