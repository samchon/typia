import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_is_ToJsonAtomicUnion = _test_is<ToJsonAtomicUnion>(
    ToJsonAtomicUnion,
)((input) => typia.is(input));
