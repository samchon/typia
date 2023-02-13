import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TemplateUnion = _test_assertPrune(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.assertPrune(input),
    TemplateUnion.SPOILERS,
);