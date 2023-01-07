import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TemplateAtomic = _test_assertParse(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.assertParse<TemplateAtomic>(input),
    TemplateAtomic.SPOILERS,
);