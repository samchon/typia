import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createIsClone_TemplateAtomic = _test_isClone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createIsClone<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
