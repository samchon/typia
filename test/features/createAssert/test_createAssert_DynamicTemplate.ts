import typia from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_DynamicTemplate = _test_assert(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createAssert<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
