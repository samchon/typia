import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_template_union = _test_assert_clone(
    "template union",
    TemplateUnion.generate,
    TSON.createAssertClone<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
