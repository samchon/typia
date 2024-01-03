import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_json_application_swagger_surplus_TypeTagType =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TypeTagType",
  })(typia.json.application<[TypeTagType], "swagger", true>());
