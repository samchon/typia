import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_standardSchema_createValidate_TupleOptional = _test_standardSchema_validate(
    "TupleOptional",
)<TupleOptional>(
    TupleOptional
)(typia.createValidate<TupleOptional>());
