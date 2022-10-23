import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_template_atomic =
    _test_validate_equals(
        "template atomic",
        TemplateAtomic.generate,
        TSON.createValidateEquals<TemplateAtomic>(),
    );
