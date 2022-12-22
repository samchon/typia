import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TemplateUnion = _test_assert(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createAssert<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
