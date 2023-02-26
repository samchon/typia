import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createAssertStringify_TemplateAtomic = _test_assertStringify(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createAssertStringify<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
