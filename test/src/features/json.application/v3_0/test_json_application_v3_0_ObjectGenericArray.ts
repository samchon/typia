import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_json_application_v3_0_ObjectGenericArray =
  _test_json_application({
    version: "3.0",
    name: "ObjectGenericArray",
  })(typia.json.application<[ObjectGenericArray], "3.0">());
