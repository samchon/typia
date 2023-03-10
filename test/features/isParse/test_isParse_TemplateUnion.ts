import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_isParse_TemplateUnion = _test_isParse(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.isParse<TemplateUnion>(input),
    TemplateUnion.SPOILERS,
);
