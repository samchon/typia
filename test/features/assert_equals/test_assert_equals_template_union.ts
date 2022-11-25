import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_template_union = _test_assert_equals(
    "template union",
    TemplateUnion.generate,
    (input) => TSON.assertEquals(input),
);
