import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_json_application_v3_0_ObjectUnionExplicit =
  _test_json_application({
    version: "3.0",
    name: "ObjectUnionExplicit",
  })(typia.json.application<[ObjectUnionExplicit], "3.0">());
