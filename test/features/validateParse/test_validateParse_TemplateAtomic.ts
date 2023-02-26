import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_validateParse_TemplateAtomic = _test_validateParse(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.validateParse<TemplateAtomic>(input),
    TemplateAtomic.SPOILERS,
);
