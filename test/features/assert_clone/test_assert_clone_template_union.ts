import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_template_union = _test_assert_clone(
    "template union",
    TemplateUnion.generate,
    (input) => TSON.assertClone(input),
    TemplateUnion.SPOILERS,
);
