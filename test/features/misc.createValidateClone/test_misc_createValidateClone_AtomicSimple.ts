import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_validateClone_AtomicSimple = _test_misc_validateClone(
    "AtomicSimple",
)<AtomicSimple>(AtomicSimple)(typia.misc.createValidateClone<AtomicSimple>());
