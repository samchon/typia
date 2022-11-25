import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_TemplateConstant = _test_assertClone(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => TSON.assertClone(input),
    TemplateConstant.SPOILERS,
);