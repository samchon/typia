import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_TemplateAtomic = _test_isClone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => TSON.isClone(input),
    TemplateAtomic.SPOILERS,
);