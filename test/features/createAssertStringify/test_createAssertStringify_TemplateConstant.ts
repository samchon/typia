import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createAssertStringify_TemplateConstant =
    _test_assertStringify(
        "TemplateConstant",
        TemplateConstant.generate,
        typia.createAssertStringify<TemplateConstant>(),
        TemplateConstant.SPOILERS,
    );
