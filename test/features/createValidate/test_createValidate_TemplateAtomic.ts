import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_validate_TemplateAtomic = _test_validate<TemplateAtomic>(
    TemplateAtomic,
)(typia.createValidate<TemplateAtomic>());
