import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_misc_validateClone_ToJsonAtomicSimple =
    _test_misc_validateClone<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input) =>
        typia.misc.validateClone(input),
    );
