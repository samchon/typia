import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createValidateEquals_TemplateAtomic = _test_validateEquals(
    "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)(typia.createValidateEquals<TemplateAtomic>());
