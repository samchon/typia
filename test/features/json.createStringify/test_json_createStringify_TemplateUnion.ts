import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_json_stringify_TemplateUnion = _test_json_stringify(
    "TemplateUnion",
)<TemplateUnion>(TemplateUnion)(typia.json.createStringify<TemplateUnion>());
