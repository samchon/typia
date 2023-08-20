import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_assertPrune_TemplateUnion = _test_assertPrune(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.assertPrune<TemplateUnion>(input),
    TemplateUnion.SPOILERS,
);
