import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_json_application_v3_1_TupleRestArray = _test_json_application(
  {
    version: "3.1",
    name: "TupleRestArray",
  },
)(typia.json.application<[TupleRestArray], "3.1">());
