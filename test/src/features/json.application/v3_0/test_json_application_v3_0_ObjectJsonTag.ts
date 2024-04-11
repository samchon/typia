import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_json_application_v3_0_ObjectJsonTag = _test_json_application({
  version: "3.0",
  name: "ObjectJsonTag",
})(typia.json.application<[ObjectJsonTag], "3.0">());
