import typia from "../../../src";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_createAssertPrune_TemplateAtomic = _test_assertPrune(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createAssertPrune<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
