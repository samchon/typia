import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_assertClone_AtomicSimple =
    _test_misc_assertClone<AtomicSimple>(AtomicSimple)((input) =>
        typia.misc.assertClone<AtomicSimple>(input),
    );
