import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createAssertPrune_TemplateConstant = _test_assertPrune(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createAssertPrune<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
