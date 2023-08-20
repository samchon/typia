import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_isStringify_TemplateUnion = _test_isStringify(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.isStringify<TemplateUnion>(input),
    TemplateUnion.SPOILERS,
);
