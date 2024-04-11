import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_json_application_v3_0_ObjectGenericUnion =
  _test_json_application({
    version: "3.0",
    name: "ObjectGenericUnion",
  })(typia.json.application<[ObjectGenericUnion], "3.0">());
