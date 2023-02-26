import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TemplateUnion = _test_assertParse(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.assertParse<TemplateUnion>(input),
    TemplateUnion.SPOILERS,
);
