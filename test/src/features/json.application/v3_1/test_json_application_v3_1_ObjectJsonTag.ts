import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_json_application_v3_1_ObjectJsonTag = _test_json_application({
  version: "3.1",
  name: "ObjectJsonTag",
})(typia.json.application<[ObjectJsonTag], "3.1">());
