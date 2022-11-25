import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TemplateUnion = _test_isClone(
    "TemplateUnion",
    TemplateUnion.generate,
    TSON.createIsClone<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);