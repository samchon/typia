import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createAssertEquals_TemplateAtomic = _test_assertEquals(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createAssertEquals<TemplateAtomic>(),
);
