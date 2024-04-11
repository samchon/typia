import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_json_application_v3_1_TypeTagDefault = _test_json_application(
  {
    version: "3.1",
    name: "TypeTagDefault",
  },
)(typia.json.application<[TypeTagDefault], "3.1">());
