import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TemplateAtomic = _test_isStringify(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createIsStringify<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);