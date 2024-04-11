import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_json_application_v3_1_ObjectIntersection =
  _test_json_application({
    version: "3.1",
    name: "ObjectIntersection",
  })(typia.json.application<[ObjectIntersection], "3.1">());
