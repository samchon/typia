import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_validateClone_TemplateAtomic = _test_validateClone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.validateClone<TemplateAtomic>(input),
    TemplateAtomic.SPOILERS,
);
