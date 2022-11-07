import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_template_union = _test_assert(
    "template union",
    TemplateUnion.generate,
    TSON.createAssert<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
