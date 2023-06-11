import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_stringify_TemplateConstant = _test_stringify(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.stringify(input),
);
