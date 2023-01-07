import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_TemplateUnion = _test_assertEquals(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createAssertEquals<TemplateUnion>(),
);