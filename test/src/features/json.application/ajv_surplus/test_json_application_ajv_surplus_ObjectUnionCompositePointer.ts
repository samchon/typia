import typia from "typia";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ObjectUnionCompositePointer =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectUnionCompositePointer",
  })(typia.json.application<[ObjectUnionCompositePointer], "ajv", true>());
