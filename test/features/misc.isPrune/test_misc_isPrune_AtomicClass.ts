import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_isPrune_AtomicClass = _test_misc_isPrune<AtomicClass>(
    AtomicClass,
)((input) => typia.misc.isPrune(input));
