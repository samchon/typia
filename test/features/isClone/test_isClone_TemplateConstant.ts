import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_TemplateConstant = _test_isClone(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => TSON.isClone(input),
    TemplateConstant.SPOILERS,
);
