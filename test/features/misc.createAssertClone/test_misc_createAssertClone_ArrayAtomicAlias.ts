import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_misc_createAssertClone_ArrayAtomicAlias =
    _test_misc_assertClone("ArrayAtomicAlias")<ArrayAtomicAlias>(
        ArrayAtomicAlias,
    )(typia.misc.createAssertClone<ArrayAtomicAlias>());
