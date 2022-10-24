import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_template_union = _test_stringify(
    "template union",
    TemplateUnion.generate,
    (input) => TSON.stringify(input),
);
