import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TemplateAtomic = _test_validate(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => TSON.validate(input),
    TemplateAtomic.SPOILERS,
);