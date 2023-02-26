import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createIsClone_TemplateConstant = _test_isClone(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createIsClone<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
