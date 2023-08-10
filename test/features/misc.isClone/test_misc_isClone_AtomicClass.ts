import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_isClone_AtomicClass = _test_misc_isClone<AtomicClass>(
    AtomicClass,
)((input) => typia.misc.isClone<AtomicClass>(input));
