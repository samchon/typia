import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_template_atomic = _test_is_stringify(
    "template atomic",
    TemplateAtomic.generate,
    (input) => TSON.isStringify(input),
    TemplateAtomic.SPOILERS,
);
