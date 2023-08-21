import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_isPrune_AtomicSimple = _test_misc_isPrune(
    "AtomicSimple",
)<AtomicSimple>(AtomicSimple)((input) =>
    typia.misc.isPrune<AtomicSimple>(input),
);
