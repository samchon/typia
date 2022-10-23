import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_is } from "./_test_is";

export const test_is_template_atomic = _test_is(
    "template atomic",
    TemplateAtomic.generate,
    (input) => TSON.is(input),
    TemplateAtomic.SPOILERS,
);
