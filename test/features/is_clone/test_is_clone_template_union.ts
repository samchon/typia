import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_template_union = _test_is_clone(
    "template union",
    TemplateUnion.generate,
    (input) => TSON.isClone(input),
    TemplateUnion.SPOILERS,
);
