import typia from "../../../src";

import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_createAssertEquals_DynamicTemplate = _test_assertEquals(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createAssertEquals<DynamicTemplate>(),
);
