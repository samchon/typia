import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_assertPrune_TemplateAtomic =
    _test_misc_assertPrune<TemplateAtomic>(TemplateAtomic)(
        typia.misc.createAssertPrune<TemplateAtomic>(),
    );
