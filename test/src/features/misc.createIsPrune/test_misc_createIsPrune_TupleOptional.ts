import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_misc_createIsPrune_TupleOptional = _test_misc_isPrune(
  "TupleOptional",
)<TupleOptional>(TupleOptional)(typia.misc.createIsPrune<TupleOptional>());
