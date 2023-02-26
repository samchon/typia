import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_TemplateAtomic = _test_assertParse(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createAssertParse<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
