import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_json_schema_v3_0_ObjectTuple = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectTuple",
  })(typia.json.schema<ObjectTuple, "3.0">());
