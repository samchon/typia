import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_TemplateAtomic = _test_assertEquals(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.assertEquals(input),
);