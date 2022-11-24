import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_template_union = _test_equals(
    "template union",
    TemplateUnion.generate,
    TSON.createEquals<TemplateUnion>(),
);
