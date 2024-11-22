import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_json_application_v3_1_TemplateUnion = _test_json_application({
  version: "3.1",
  name: "TemplateUnion",
})(typia.json.application<TemplateUnionApplication, "3.1">());

interface TemplateUnionApplication {
  insert(first: TemplateUnion): Promise<void>;
  reduce(
    first: TemplateUnion,
    second: TemplateUnion | null,
  ): Promise<TemplateUnion>;
  coalesce(
    first: TemplateUnion | null,
    second: TemplateUnion | null,
    third?: TemplateUnion | null,
  ): Promise<TemplateUnion | null>;
}
