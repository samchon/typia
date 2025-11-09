import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_validatePrune_TupleRestObject = (): void =>
  _test_misc_validatePrune("TupleRestObject")<TupleRestObject>(TupleRestObject)(
    (input) => typia.misc.validatePrune<TupleRestObject>(input),
  );
