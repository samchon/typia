import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_assertParse_TemplateAtomic = _test_assertParse(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.assertParse<TemplateAtomic>(input),
    TemplateAtomic.SPOILERS,
);
