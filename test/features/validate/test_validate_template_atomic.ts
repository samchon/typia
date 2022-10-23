import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_validate } from "./_test_validate";

export const test_validate_template_atomic = _test_validate(
    "template atomic",
    TemplateAtomic.generate,
    (input) => TSON.validate(input),
    TemplateAtomic.SPOILERS,
);
