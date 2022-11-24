import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_template_atomic =
    _test_assert_stringify(
        "template atomic",
        TemplateAtomic.generate,
        TSON.createAssertStringify<TemplateAtomic>(),
        TemplateAtomic.SPOILERS,
    );
