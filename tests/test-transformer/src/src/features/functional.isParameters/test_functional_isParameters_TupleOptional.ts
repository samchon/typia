import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_isParameters_TupleOptional = (): void => _test_functional_isParameters(
  "TupleOptional"
)(TupleOptional)(
  (p: (input: TupleOptional) => TupleOptional) => typia.functional.isParameters(p),
)