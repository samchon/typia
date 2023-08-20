import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_assertPrune_TemplateAtomic = _test_assertPrune(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.assertPrune<TemplateAtomic>(input),
    TemplateAtomic.SPOILERS,
);
