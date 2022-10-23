import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_is } from "./../is/_test_is";

export const test_create_is_template_union = _test_is(
    "template union",
    TemplateUnion.generate,
    TSON.createIs<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
