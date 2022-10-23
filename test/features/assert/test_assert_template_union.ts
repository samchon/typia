import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_template_union = _test_assert(
    "template union",
    TemplateUnion.generate,
    (input) => TSON.assertType(input),
    TemplateUnion.SPOILERS,
);
