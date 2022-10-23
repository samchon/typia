import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_template_union = _test_assert_equals(
    "template union",
    TemplateUnion.generate,
    TSON.createAssertEquals<TemplateUnion>(),
);
