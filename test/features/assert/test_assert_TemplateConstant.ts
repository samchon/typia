import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TemplateConstant = _test_assert(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => TSON.assert(input),
    TemplateConstant.SPOILERS,
);
