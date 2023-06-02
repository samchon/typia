import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { SetUnion } from "../../structures/SetUnion";

export const test_stringify_SetUnion = _test_stringify(
    "SetUnion",
    SetUnion.generate,
    (input) => typia.stringify(input),
);
