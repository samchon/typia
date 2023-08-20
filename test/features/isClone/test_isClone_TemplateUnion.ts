import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_isClone_TemplateUnion = _test_isClone(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.isClone<TemplateUnion>(input),
    TemplateUnion.SPOILERS,
);
