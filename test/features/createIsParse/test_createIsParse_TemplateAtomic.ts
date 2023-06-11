import typia from "../../../src";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_createIsParse_TemplateAtomic = _test_isParse(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createIsParse<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
