import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_is } from "../internal/_test_is";

export const test_is_TemplateAtomic = _test_is(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => TSON.is(input),
    TemplateAtomic.SPOILERS,
);
