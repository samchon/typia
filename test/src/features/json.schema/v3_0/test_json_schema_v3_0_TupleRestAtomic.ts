import typia from "typia";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_TupleRestAtomic = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "TupleRestAtomic", 
  })(typia.json.schema<TupleRestAtomic, "3.0">());