import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_clone_ToJsonUnion = _test_clone(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => typia.clone(input),
);
