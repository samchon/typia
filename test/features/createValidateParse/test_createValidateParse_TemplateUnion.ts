import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_TemplateUnion = _test_validateParse(
    "TemplateUnion",
    TemplateUnion.generate,
    TSON.createValidateParse<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
