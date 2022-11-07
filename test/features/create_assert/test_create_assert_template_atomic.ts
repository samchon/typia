import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_template_atomic = _test_assert(
    "template atomic",
    TemplateAtomic.generate,
    TSON.createAssert<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
