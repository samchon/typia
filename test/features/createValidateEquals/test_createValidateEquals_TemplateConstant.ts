import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_validateEquals_TemplateConstant = _test_validateEquals(
    "TemplateConstant",
)<TemplateConstant>(TemplateConstant)(
    typia.createValidateEquals<TemplateConstant>(),
);
