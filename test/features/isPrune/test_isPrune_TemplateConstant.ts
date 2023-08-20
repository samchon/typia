import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_isPrune_TemplateConstant = _test_isPrune(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.isPrune<TemplateConstant>(input),
    TemplateConstant.SPOILERS,
);
