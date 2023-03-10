import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createIsStringify_TemplateUnion = _test_isStringify(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createIsStringify<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
