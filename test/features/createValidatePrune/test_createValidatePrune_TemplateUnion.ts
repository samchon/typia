import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_TemplateUnion = _test_validatePrune(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createValidatePrune<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);