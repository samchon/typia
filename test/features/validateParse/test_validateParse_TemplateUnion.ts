import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TemplateUnion = _test_validateParse(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => TSON.validateParse<TemplateUnion>(input),
    TemplateUnion.SPOILERS,
);
