import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_TemplateUnion = _test_validateClone(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => TSON.validateClone(input),
    TemplateUnion.SPOILERS,
);
