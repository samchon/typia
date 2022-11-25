import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_template_union = _test_is(
    "template union",
    TemplateUnion.generate,
    (input) => TSON.is(input),
    TemplateUnion.SPOILERS,
);
