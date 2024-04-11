import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_json_application_v3_0_ObjectAlias = _test_json_application({
  version: "3.0",
  name: "ObjectAlias",
})(typia.json.application<[ObjectAlias], "3.0">());
