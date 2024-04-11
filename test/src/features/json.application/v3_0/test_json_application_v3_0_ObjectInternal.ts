import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_json_application_v3_0_ObjectInternal = _test_json_application(
  {
    version: "3.0",
    name: "ObjectInternal",
  },
)(typia.json.application<[ObjectInternal], "3.0">());
