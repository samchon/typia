import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createValidateStringify_TemplateUnion =
    _test_validateStringify(
        "TemplateUnion",
        TemplateUnion.generate,
        typia.createValidateStringify<TemplateUnion>(),
        TemplateUnion.SPOILERS,
    );
