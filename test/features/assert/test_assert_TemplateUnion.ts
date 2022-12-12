import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TemplateUnion = _test_assert(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.assert(input),
    TemplateUnion.SPOILERS,
);