import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_isClone_TemplateAtomic = _test_isClone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.isClone<TemplateAtomic>(input),
    TemplateAtomic.SPOILERS,
);
