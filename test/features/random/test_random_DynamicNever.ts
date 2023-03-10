import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_random_DynamicNever = _test_random(
    "DynamicNever",
    () => typia.random<DynamicNever>(),
    typia.createAssert<DynamicNever>(),
);
