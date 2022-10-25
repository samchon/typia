import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_template_union = _test_is_stringify(
    "template union",
    TemplateUnion.generate,
    TSON.createIsStringify<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
