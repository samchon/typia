import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createAssertGuardEquals_ArrayAtomicAlias =
    _test_assertGuardEquals("ArrayAtomicAlias")<ArrayAtomicAlias>(
        ArrayAtomicAlias,
    )(typia.createAssertGuardEquals<ArrayAtomicAlias>());
