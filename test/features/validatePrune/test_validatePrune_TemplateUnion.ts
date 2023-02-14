import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TemplateUnion = _test_validatePrune(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.validatePrune(input),
    TemplateUnion.SPOILERS,
);