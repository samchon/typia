import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_clone_DynamicNever = _test_clone(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.clone<DynamicNever>(input),
);
