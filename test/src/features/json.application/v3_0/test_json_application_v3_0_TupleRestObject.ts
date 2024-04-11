import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_json_application_v3_0_TupleRestObject =
  _test_json_application({
    version: "3.0",
    name: "TupleRestObject",
  })(typia.json.application<[TupleRestObject], "3.0">());
