import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createAssertClone_TemplateUnion = _test_assertClone(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createAssertClone<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
