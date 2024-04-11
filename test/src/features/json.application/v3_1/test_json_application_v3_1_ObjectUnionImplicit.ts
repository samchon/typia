import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_json_application_v3_1_ObjectUnionImplicit =
  _test_json_application({
    version: "3.1",
    name: "ObjectUnionImplicit",
  })(typia.json.application<[ObjectUnionImplicit], "3.1">());
