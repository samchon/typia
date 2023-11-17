import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_assertGuardEquals_ToJsonAtomicSimple =
    _test_assertGuardEquals("ToJsonAtomicSimple")<ToJsonAtomicSimple>(
        ToJsonAtomicSimple,
    )((input) => typia.assertGuardEquals<ToJsonAtomicSimple>(input));
