import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_isClone_TemplateUnion = _test_misc_isClone(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.misc.createIsClone<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
