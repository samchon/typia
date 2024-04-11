import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_json_application_v3_1_ObjectGenericArray =
  _test_json_application({
    version: "3.1",
    name: "ObjectGenericArray",
  })(typia.json.application<[ObjectGenericArray], "3.1">());
