import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createIsPrune_TemplateAtomic = _test_isPrune(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createIsPrune<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
