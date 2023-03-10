import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_assertParse_TemplateUnion = _test_assertParse(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.assertParse<TemplateUnion>(input),
    TemplateUnion.SPOILERS,
);
