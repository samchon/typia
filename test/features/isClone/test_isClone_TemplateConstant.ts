import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_TemplateConstant = _test_isClone(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.isClone(input),
    TemplateConstant.SPOILERS,
);