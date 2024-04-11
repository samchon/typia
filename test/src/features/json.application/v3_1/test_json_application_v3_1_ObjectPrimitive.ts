import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_json_application_v3_1_ObjectPrimitive =
  _test_json_application({
    version: "3.1",
    name: "ObjectPrimitive",
  })(typia.json.application<[ObjectPrimitive], "3.1">());
