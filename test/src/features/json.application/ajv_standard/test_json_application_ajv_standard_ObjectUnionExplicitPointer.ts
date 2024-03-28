import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_json_application_ajv_standard_ObjectUnionExplicitPointer =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectUnionExplicitPointer",
  })(typia.json.application<[ObjectUnionExplicitPointer], "ajv", false>());
