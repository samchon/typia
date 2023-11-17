import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_misc_createIsPrune_TupleUnion = _test_misc_isPrune(
  "TupleUnion",
)<TupleUnion>(TupleUnion)(typia.misc.createIsPrune<TupleUnion>());
