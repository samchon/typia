import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_TemplateAtomic =
    _test_validateStringify(
        "TemplateAtomic",
        TemplateAtomic.generate,
        TSON.createValidateStringify<TemplateAtomic>(),
        TemplateAtomic.SPOILERS,
    );
