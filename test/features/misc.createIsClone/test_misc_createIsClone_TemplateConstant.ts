import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_misc_isClone_TemplateConstant = _test_misc_isClone(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.misc.createIsClone<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
