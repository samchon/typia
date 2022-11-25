import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TemplateUnion = _test_validate(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => TSON.validate(input),
    TemplateUnion.SPOILERS,
);