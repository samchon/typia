import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TemplateAtomic = _test_isClone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    TSON.createIsClone<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
