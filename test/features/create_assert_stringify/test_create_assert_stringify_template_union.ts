import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_template_union =
    _test_assert_stringify(
        "template union",
        TemplateUnion.generate,
        TSON.createAssertStringify<TemplateUnion>(),
        TemplateUnion.SPOILERS,
    );
