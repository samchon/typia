import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TemplateConstant = _test_validateEquals(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => TSON.validateEquals(input),
);
