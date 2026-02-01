import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createEquals_TupleOptional = (): void => _test_equals(
    "TupleOptional",
)<TupleOptional>(
    TupleOptional
)(typia.createEquals<TupleOptional>());
