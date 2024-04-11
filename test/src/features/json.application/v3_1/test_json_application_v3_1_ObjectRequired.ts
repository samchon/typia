import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_json_application_v3_1_ObjectRequired = _test_json_application(
  {
    version: "3.1",
    name: "ObjectRequired",
  },
)(typia.json.application<[ObjectRequired], "3.1">());
