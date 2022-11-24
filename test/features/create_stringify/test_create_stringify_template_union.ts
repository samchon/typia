import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_template_union = _test_stringify(
    "template union",
    TemplateUnion.generate,
    TSON.createStringify<TemplateUnion>(),
);
