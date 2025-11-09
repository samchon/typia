import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_misc_validatePrune_TupleOptional = (): void =>
  _test_misc_validatePrune("TupleOptional")<TupleOptional>(TupleOptional)(
    (input) => typia.misc.validatePrune<TupleOptional>(input),
  );
