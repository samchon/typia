import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createAssertStringify_TemplateUnion = _test_assertStringify(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createAssertStringify<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
