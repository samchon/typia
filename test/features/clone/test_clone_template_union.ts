import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_clone } from "./_test_clone";

export const test_clone_template_union = _test_clone(
    "template union",
    TemplateUnion.generate,
    (input) => TSON.clone(input),
);
