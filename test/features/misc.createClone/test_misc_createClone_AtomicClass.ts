import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_createClone_AtomicClass = _test_misc_clone(
    "AtomicClass",
)<AtomicClass>(AtomicClass)(typia.misc.createClone<AtomicClass>());
