import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_assertPrune_AtomicSimple = _test_misc_assertPrune(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.misc.assertPrune(input),
    AtomicSimple.SPOILERS,
);
