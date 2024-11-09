import typia from "typia";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_TupleRestAtomic = 
  _test_json_schemas({
    version: "3.1",
    name: "TupleRestAtomic", 
  })(typia.json.schemas<[TupleRestAtomic], "3.1">());