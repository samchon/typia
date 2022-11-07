import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assert } from "./_test_assert";

export const test_assert_template_atomic = _test_assert(
    "template atomic",
    TemplateAtomic.generate,
    (input) => TSON.assert(input),
    TemplateAtomic.SPOILERS,
);
