import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_json_application_v3_0_ObjectNullable = _test_json_application(
  {
    version: "3.0",
    name: "ObjectNullable",
  },
)(typia.json.application<[ObjectNullable], "3.0">());
