import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_json_application_v3_1_ObjectInternal = _test_json_application(
  {
    version: "3.1",
    name: "ObjectInternal",
  },
)(typia.json.application<[ObjectInternal], "3.1">());
