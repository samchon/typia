import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_json_application_v3_1_TemplateConstant =
  _test_json_application({
    version: "3.1",
    name: "TemplateConstant",
  })(typia.json.application<TemplateConstantApplication, "3.1">());

interface TemplateConstantApplication {
  insert(first: TemplateConstant): Promise<void>;
  reduce(
    first: TemplateConstant,
    second: TemplateConstant | null,
  ): Promise<TemplateConstant>;
  coalesce(
    first: TemplateConstant | null,
    second: TemplateConstant | null,
    third?: TemplateConstant | null,
  ): Promise<TemplateConstant | null>;
}
