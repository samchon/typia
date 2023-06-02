import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createValidateEquals_TemplateConstant = _test_validateEquals(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createValidateEquals<TemplateConstant>(),
);
