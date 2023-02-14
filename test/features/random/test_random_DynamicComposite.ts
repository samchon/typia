import typia from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_random } from "../internal/_test_random";

export const test_random_DynamicComposite = _test_random(
    "DynamicComposite",
    () => typia.random<DynamicComposite>(),
    typia.createAssert<typia.Primitive<DynamicComposite>>(),
);