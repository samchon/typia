import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_isStringify_TemplateAtomic = _test_isStringify(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.isStringify(input),
    TemplateAtomic.SPOILERS,
);
