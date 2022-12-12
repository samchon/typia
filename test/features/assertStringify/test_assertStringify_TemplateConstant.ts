import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_TemplateConstant = _test_assertStringify(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.assertStringify(input),
    TemplateConstant.SPOILERS,
);