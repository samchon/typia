import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_json_createIsStringify_TemplateUnion = _test_json_isStringify(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)(typia.json.createIsStringify<TemplateUnion>());
