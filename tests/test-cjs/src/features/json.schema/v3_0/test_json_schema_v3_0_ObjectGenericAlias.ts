import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_schema_v3_0_ObjectGenericAlias = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectGenericAlias",
  })(typia.json.schema<ObjectGenericAlias, "3.0">());
