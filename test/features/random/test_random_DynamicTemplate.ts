import typia from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_random } from "../internal/_test_random";

export const test_random_DynamicTemplate = _test_random(
    "DynamicTemplate",
    () => typia.random<DynamicTemplate>(),
    typia.createAssert<typia.Primitive<DynamicTemplate>>(),
);