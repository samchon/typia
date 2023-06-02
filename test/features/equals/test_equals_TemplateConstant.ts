import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_equals_TemplateConstant = _test_equals(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.equals(input),
);
