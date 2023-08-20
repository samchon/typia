import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_clone_DynamicSimple = _test_clone(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.clone<DynamicSimple>(input),
);
