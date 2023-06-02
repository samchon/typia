import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createAssertPrune_TemplateAtomic = _test_assertPrune(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createAssertPrune<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
