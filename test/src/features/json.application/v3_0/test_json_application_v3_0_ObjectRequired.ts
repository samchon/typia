import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_json_application_v3_0_ObjectRequired = _test_json_application(
  {
    version: "3.0",
    name: "ObjectRequired",
  },
)(typia.json.application<[ObjectRequired], "3.0">());
