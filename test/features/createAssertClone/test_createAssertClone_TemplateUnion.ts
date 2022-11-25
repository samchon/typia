import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TemplateUnion = _test_assertClone(
    "TemplateUnion",
    TemplateUnion.generate,
    TSON.createAssertClone<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);