import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_is } from "./../is/_test_is";

export const test_create_is_template_atomic = _test_is(
    "template atomic",
    TemplateAtomic.generate,
    TSON.createIs<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
