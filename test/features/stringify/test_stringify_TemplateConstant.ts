import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_TemplateConstant = _test_stringify(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.stringify(input),
);