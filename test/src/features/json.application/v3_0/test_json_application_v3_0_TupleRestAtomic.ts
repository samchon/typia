import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_json_application_v3_0_TupleRestAtomic =
  _test_json_application({
    version: "3.0",
    name: "TupleRestAtomic",
  })(typia.json.application<[TupleRestAtomic], "3.0">());
