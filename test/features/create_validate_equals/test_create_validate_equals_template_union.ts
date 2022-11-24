import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_template_union = _test_validate_equals(
    "template union",
    TemplateUnion.generate,
    TSON.createValidateEquals<TemplateUnion>(),
);
