import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_json_application_v3_1_ObjectSimple = _test_json_application({
  version: "3.1",
  name: "ObjectSimple",
})(typia.json.application<[ObjectSimple], "3.1">());
