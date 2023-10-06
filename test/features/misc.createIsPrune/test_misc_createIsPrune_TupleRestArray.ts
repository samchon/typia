import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_createIsPrune_TupleRestArray = _test_misc_isPrune(
    "TupleRestArray",
)<TupleRestArray>(TupleRestArray)(typia.misc.createIsPrune<TupleRestArray>());
