import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TemplateAtomic = _test_equals(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.equals(input),
);
