import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_isPrune_ArrayHierarchical =
    _test_misc_isPrune<ArrayHierarchical>(ArrayHierarchical)(
        typia.misc.createIsPrune<ArrayHierarchical>(),
    );
