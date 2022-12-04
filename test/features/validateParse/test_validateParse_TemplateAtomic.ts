import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TemplateAtomic = _test_validateParse(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => TSON.validateParse<TemplateAtomic>(input),
    TemplateAtomic.SPOILERS,
);
