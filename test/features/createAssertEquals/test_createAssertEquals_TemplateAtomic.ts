import typia from "../../../src";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_createAssertEquals_TemplateAtomic = _test_assertEquals(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createAssertEquals<TemplateAtomic>(),
);
