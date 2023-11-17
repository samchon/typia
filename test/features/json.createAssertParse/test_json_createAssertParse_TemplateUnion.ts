import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_json_createAssertParse_TemplateUnion = _test_json_assertParse(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)(typia.json.createAssertParse<TemplateUnion>());
