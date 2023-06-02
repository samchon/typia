import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createAssertClone_DynamicTemplate = _test_assertClone(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createAssertClone<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
