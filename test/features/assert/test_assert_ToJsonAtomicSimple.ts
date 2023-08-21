import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_assert_ToJsonAtomicSimple = _test_assert(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input) =>
    typia.assert<ToJsonAtomicSimple>(input),
);
