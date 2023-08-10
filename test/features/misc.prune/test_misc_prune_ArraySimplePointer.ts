import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_misc_prune_ArraySimplePointer =
    _test_misc_prune<ArraySimplePointer>(ArraySimplePointer)((input) =>
        typia.misc.prune(input),
    );
