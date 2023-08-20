import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_validatePrune_TemplateUnion = _test_validatePrune(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.validatePrune<TemplateUnion>(input),
    TemplateUnion.SPOILERS,
);
