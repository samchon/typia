import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_json_schema_v3_0_ObjectOptional = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectOptional",
  })(typia.json.schema<ObjectOptional, "3.0">());
