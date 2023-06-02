import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_stringify_ToJsonAtomicUnion = _test_stringify(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) => typia.stringify(input),
);
