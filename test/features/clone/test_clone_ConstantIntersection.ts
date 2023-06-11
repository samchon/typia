import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_clone_ConstantIntersection = _test_clone(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input) => typia.clone(input),
);
