import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_misc_isClone_ArrayAtomicAlias =
    _test_misc_isClone<ArrayAtomicAlias>(ArrayAtomicAlias)(
        typia.misc.createIsClone<ArrayAtomicAlias>(),
    );
