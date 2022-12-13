import typia from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_ToJsonUnion = _test_is(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => typia.is(input),
);
