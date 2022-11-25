import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TemplateAtomic = _test_assert(
    "TemplateAtomic",
    TemplateAtomic.generate,
    TSON.createAssert<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);