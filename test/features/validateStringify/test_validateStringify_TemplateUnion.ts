import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_validateStringify_TemplateUnion = _test_validateStringify(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.validateStringify<TemplateUnion>(input),
    TemplateUnion.SPOILERS,
);
