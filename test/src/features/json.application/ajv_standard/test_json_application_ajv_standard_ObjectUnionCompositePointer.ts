import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_json_application_ajv_standard_ObjectUnionCompositePointer =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectUnionCompositePointer",
  })(typia.json.application<[ObjectUnionCompositePointer], "ajv", false>());
