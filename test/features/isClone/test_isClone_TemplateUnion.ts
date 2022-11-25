import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_TemplateUnion = _test_isClone(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => TSON.isClone(input),
    TemplateUnion.SPOILERS,
);