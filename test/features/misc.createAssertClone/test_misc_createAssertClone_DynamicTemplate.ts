import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_assertClone_DynamicTemplate = _test_misc_assertClone(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.misc.createAssertClone<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
