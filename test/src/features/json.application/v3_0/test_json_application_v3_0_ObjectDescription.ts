import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_json_application_v3_0_ObjectDescription =
  _test_json_application({
    version: "3.0",
    name: "ObjectDescription",
  })(typia.json.application<[ObjectDescription], "3.0">());
