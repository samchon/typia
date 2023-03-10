import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createAssertClone_TemplateAtomic = _test_assertClone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createAssertClone<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
