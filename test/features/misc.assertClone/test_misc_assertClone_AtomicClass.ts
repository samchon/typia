import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_assertClone_AtomicClass =
    _test_misc_assertClone<AtomicClass>(AtomicClass)((input) =>
        typia.misc.assertClone(input),
    );
