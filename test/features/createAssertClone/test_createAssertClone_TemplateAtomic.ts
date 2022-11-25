import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TemplateAtomic = _test_assertClone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    TSON.createAssertClone<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
