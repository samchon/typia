import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_assertPrune_TemplateConstant = _test_assertPrune(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.assertPrune<TemplateConstant>(input),
    TemplateConstant.SPOILERS,
);
