import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_isPrune_TemplateUnion = _test_misc_isPrune(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.misc.createIsPrune<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
