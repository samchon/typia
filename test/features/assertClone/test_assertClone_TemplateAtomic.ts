import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_assertClone_TemplateAtomic = _test_assertClone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.assertClone<TemplateAtomic>(input),
    TemplateAtomic.SPOILERS,
);
