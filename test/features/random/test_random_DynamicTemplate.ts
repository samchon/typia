import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_random_DynamicTemplate = _test_random(
    "DynamicTemplate",
    () => typia.random<DynamicTemplate>(),
    typia.createAssert<DynamicTemplate>(),
);
