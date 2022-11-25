import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TemplateConstant = _test_assertClone(
    "TemplateConstant",
    TemplateConstant.generate,
    TSON.createAssertClone<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
