import typia from "../../../src";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_createAssertStringify_TemplateAtomic = _test_json_assertStringify(
    "TemplateAtomic",
)<TemplateAtomic>(
    TemplateAtomic
)(typia.json.createAssertStringify<TemplateAtomic>());
