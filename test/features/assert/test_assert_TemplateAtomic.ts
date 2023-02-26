import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TemplateAtomic = _test_assert(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.assert(input),
    TemplateAtomic.SPOILERS,
);
