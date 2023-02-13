import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TemplateConstant = _test_isPrune(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createIsPrune<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);