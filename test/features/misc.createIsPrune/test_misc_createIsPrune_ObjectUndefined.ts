import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_createIsPrune_ObjectUndefined = _test_misc_isPrune(
    "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)(
    typia.misc.createIsPrune<ObjectUndefined>(),
);
