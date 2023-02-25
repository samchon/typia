import typia from "../../../src";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TemplateAtomic = _test_isPrune(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createIsPrune<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
