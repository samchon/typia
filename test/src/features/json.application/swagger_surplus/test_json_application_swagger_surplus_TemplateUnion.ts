import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_json_application_swagger_surplus_TemplateUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TemplateUnion",
  })(typia.json.application<[TemplateUnion], "swagger", true>());
