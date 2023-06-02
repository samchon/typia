import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createIsParse_TemplateAtomic = _test_isParse(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createIsParse<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
