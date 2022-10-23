import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_template_union = _test_validate(
    "template union",
    TemplateUnion.generate,
    TSON.createValidate<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
