import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_template_atomic = _test_assert_equals(
    "template atomic",
    TemplateAtomic.generate,
    (input) => TSON.assertEquals(input),
);
