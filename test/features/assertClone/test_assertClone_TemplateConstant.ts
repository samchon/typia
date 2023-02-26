import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_assertClone_TemplateConstant = _test_assertClone(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.assertClone(input),
    TemplateConstant.SPOILERS,
);
