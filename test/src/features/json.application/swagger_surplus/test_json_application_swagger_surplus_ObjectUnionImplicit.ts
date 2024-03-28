import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_json_application_swagger_surplus_ObjectUnionImplicit =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectUnionImplicit",
  })(typia.json.application<[ObjectUnionImplicit], "swagger", true>());
