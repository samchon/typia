import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createValidate_TupleOptional = _test_validate(
    "TupleOptional",
)<TupleOptional>(
    TupleOptional
)(typia.createValidate<TupleOptional>());
