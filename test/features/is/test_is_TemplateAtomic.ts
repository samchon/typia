import typia from "typia";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_is } from "../internal/_test_is";

export const test_is_TemplateAtomic = _test_is(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.is(input),
    TemplateAtomic.SPOILERS,
);
