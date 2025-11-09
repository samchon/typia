import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_json_schema_v3_0_TupleRestObject = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "TupleRestObject",
  })(typia.json.schema<TupleRestObject, "3.0">());
