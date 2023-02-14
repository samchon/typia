import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_TemplateAtomic = _test_validateClone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createValidateClone<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);