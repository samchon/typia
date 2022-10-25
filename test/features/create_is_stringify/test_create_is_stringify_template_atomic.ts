import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_template_atomic = _test_is_stringify(
    "template atomic",
    TemplateAtomic.generate,
    TSON.createIsStringify<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
