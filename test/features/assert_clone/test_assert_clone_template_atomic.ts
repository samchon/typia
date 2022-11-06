import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_template_atomic = _test_assert_clone(
    "template atomic",
    TemplateAtomic.generate,
    (input) => TSON.assertClone(input),
    TemplateAtomic.SPOILERS,
);
