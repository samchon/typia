import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_json_application_v3_0_ObjectUnionImplicit =
  _test_json_application({
    version: "3.0",
    name: "ObjectUnionImplicit",
  })(typia.json.application<[ObjectUnionImplicit], "3.0">());
