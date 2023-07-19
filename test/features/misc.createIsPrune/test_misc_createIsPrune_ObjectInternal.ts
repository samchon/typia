import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_misc_isPrune_ObjectInternal =
    _test_misc_isPrune<ObjectInternal>(ObjectInternal)(
        typia.misc.createIsPrune<ObjectInternal>(),
    );
