import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_assertStringify_TemplateAtomic =
    _test_json_assertStringify(
        "TemplateAtomic",
        TemplateAtomic.generate,
        typia.json.createAssertStringify<TemplateAtomic>(),
        TemplateAtomic.SPOILERS,
    );
