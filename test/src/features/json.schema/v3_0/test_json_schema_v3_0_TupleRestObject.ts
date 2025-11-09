import typia from "typia";
import { TupleRestObject } from "../../../structures/TupleRestObject";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_TupleRestObject = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "TupleRestObject", 
  })(typia.json.schema<TupleRestObject, "3.0">());