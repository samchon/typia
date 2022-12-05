import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_TemplateAtomic = _test_assertParse(
    "TemplateAtomic",
    TemplateAtomic.generate,
    TSON.createAssertParse<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
