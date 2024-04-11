import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_json_application_v3_0_ObjectPrimitive =
  _test_json_application({
    version: "3.0",
    name: "ObjectPrimitive",
  })(typia.json.application<[ObjectPrimitive], "3.0">());
