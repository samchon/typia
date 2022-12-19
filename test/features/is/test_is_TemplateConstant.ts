import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_is } from "../internal/_test_is";

export const test_is_TemplateConstant = _test_is(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.is(input),
    TemplateConstant.SPOILERS,
);