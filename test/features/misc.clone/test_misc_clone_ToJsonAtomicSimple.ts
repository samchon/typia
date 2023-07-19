import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_misc_clone_ToJsonAtomicSimple =
    _test_misc_clone<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input) =>
        typia.misc.clone(input),
    );
