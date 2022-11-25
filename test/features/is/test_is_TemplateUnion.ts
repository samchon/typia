import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_TemplateUnion = _test_is(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => TSON.is(input),
    TemplateUnion.SPOILERS,
);