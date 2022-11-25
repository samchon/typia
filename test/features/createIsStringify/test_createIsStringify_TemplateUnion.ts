import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TemplateUnion = _test_isStringify(
    "TemplateUnion",
    TemplateUnion.generate,
    TSON.createIsStringify<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);