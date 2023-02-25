import typia from "../../../src";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TemplateAtomic = _test_assertPrune(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.assertPrune(input),
    TemplateAtomic.SPOILERS,
);
