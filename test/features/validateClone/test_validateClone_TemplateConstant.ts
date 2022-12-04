import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_TemplateConstant = _test_validateClone(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => TSON.validateClone(input),
    TemplateConstant.SPOILERS,
);
