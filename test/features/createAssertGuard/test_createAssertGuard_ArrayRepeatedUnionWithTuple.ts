import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_createAssertGuard_ArrayRepeatedUnionWithTuple =
    _test_assertGuard(
        "ArrayRepeatedUnionWithTuple",
    )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
        typia.createAssertGuard<ArrayRepeatedUnionWithTuple>(),
    );
