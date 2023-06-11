import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createIsParse_TemplateUnion = _test_isParse(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createIsParse<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
