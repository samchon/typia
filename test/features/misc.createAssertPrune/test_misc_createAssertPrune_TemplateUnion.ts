import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_assertPrune_TemplateUnion = _test_misc_assertPrune(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.misc.createAssertPrune<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
