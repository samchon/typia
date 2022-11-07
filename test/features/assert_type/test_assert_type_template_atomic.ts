import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_template_atomic = _test_assert_type(
    "template atomic",
    TemplateAtomic.generate,
    (input) => TSON.assertType(input),
    TemplateAtomic.SPOILERS,
);
