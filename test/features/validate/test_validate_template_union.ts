import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_template_union = _test_validate(
    "template union",
    TemplateUnion.generate,
    (input) => TSON.validate(input),
    TemplateUnion.SPOILERS,
);
