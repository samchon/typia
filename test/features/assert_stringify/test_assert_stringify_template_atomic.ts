import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_template_atomic = _test_assert_stringify(
    "template atomic",
    TemplateAtomic.generate,
    (input) => TSON.assertStringify(input),
    TemplateAtomic.SPOILERS,
);
