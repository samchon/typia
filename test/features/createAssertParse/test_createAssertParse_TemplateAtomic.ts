import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createAssertParse_TemplateAtomic = _test_assertParse(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createAssertParse<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
