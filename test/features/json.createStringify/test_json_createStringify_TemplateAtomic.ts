import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_stringify_TemplateAtomic = _test_json_stringify(
    "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)(typia.json.createStringify<TemplateAtomic>());
