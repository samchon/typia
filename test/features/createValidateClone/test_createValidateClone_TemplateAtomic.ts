import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createValidateClone_TemplateAtomic = _test_validateClone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createValidateClone<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
