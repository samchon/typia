import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_json_application_v3_1_ObjectGenericUnion =
  _test_json_application({
    version: "3.1",
    name: "ObjectGenericUnion",
  })(typia.json.application<[ObjectGenericUnion], "3.1">());
