import typia from "typia";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_TemplateAtomic = _test_assertClone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.assertClone(input),
    TemplateAtomic.SPOILERS,
);
