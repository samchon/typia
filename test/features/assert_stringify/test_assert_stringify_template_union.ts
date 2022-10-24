import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_template_union = _test_assert_stringify(
    "template union",
    TemplateUnion.generate,
    (input) => TSON.assertStringify(input),
    TemplateUnion.SPOILERS,
);
