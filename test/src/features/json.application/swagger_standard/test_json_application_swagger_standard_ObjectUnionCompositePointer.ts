import typia from "typia";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ObjectUnionCompositePointer =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectUnionCompositePointer",
  })(typia.json.application<[ObjectUnionCompositePointer], "swagger", false>());
