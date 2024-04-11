import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_json_application_v3_0_ObjectIntersection =
  _test_json_application({
    version: "3.0",
    name: "ObjectIntersection",
  })(typia.json.application<[ObjectIntersection], "3.0">());
