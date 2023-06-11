import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createIsClone_TemplateUnion = _test_isClone(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createIsClone<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
