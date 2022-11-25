import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_template_atomic = _test_validate_equals(
    "template atomic",
    TemplateAtomic.generate,
    (input) => TSON.validateEquals(input),
);
