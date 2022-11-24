import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_template_union = _test_assert_type(
    "template union",
    TemplateUnion.generate,
    TSON.createAssertType<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
