import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_json_application_v3_1_ObjectOptional = _test_json_application(
  {
    version: "3.1",
    name: "ObjectOptional",
  },
)(typia.json.application<[ObjectOptional], "3.1">());
