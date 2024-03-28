import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_json_application_swagger_surplus_ObjectUnionCompositePointer =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectUnionCompositePointer",
  })(typia.json.application<[ObjectUnionCompositePointer], "swagger", true>());
