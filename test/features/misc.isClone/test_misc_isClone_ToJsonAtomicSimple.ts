import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_misc_isClone_ToJsonAtomicSimple =
    _test_misc_isClone<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input) =>
        typia.misc.isClone(input),
    );
