import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_TemplateAtomic = _test_validateEquals(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createValidateEquals<TemplateAtomic>(),
);
