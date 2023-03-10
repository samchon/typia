import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createValidateParse_TemplateUnion = _test_validateParse(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createValidateParse<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
