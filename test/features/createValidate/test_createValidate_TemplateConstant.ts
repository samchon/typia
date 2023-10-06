import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createValidate_TemplateConstant = _test_validate(
    "TemplateConstant",
)<TemplateConstant>(TemplateConstant)(typia.createValidate<TemplateConstant>());
