import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createValidateStringify_TemplateAtomic =
    _test_validateStringify(
        "TemplateAtomic",
        TemplateAtomic.generate,
        typia.createValidateStringify<TemplateAtomic>(),
        TemplateAtomic.SPOILERS,
    );
