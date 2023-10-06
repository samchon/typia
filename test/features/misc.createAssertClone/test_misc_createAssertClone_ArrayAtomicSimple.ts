import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_createAssertClone_ArrayAtomicSimple =
    _test_misc_assertClone("ArrayAtomicSimple")<ArrayAtomicSimple>(
        ArrayAtomicSimple,
    )(typia.misc.createAssertClone<ArrayAtomicSimple>());
