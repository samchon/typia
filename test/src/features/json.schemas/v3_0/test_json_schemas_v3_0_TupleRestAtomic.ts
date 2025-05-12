import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_json_schemas_v3_0_TupleRestAtomic = _test_json_schemas({
  version: "3.0",
  name: "TupleRestAtomic",
})(typia.json.schemas<[TupleRestAtomic], "3.0">());
