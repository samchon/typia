import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_template_atomic = _test_validate(
    "template atomic",
    TemplateAtomic.generate,
    TSON.createValidate<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
