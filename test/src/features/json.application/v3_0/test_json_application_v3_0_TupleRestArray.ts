import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_json_application_v3_0_TupleRestArray = _test_json_application(
  {
    version: "3.0",
    name: "TupleRestArray",
  },
)(typia.json.application<[TupleRestArray], "3.0">());
