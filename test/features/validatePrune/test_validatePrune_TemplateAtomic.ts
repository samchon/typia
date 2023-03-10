import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_validatePrune_TemplateAtomic = _test_validatePrune(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.validatePrune(input),
    TemplateAtomic.SPOILERS,
);
