import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createIsParse_TemplateConstant = _test_isParse(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createIsParse<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
