import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_create_assert_equals_template_atomic = _test_assert_equals(
    "template atomic",
    TemplateAtomic.generate,
    TSON.createAssertEquals<TemplateAtomic>(),
);
