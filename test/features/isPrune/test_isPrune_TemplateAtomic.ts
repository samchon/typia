import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_isPrune_TemplateAtomic = _test_isPrune(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.isPrune<TemplateAtomic>(input),
    TemplateAtomic.SPOILERS,
);
