import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_is } from "../internal/_test_is";

export const test_createIs_TemplateAtomic = _test_is(
    "TemplateAtomic",
    TemplateAtomic.generate,
    TSON.createIs<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);