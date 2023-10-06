import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_createValidate_TupleUnion = _test_validate(
    "TupleUnion",
)<TupleUnion>(
    TupleUnion
)(typia.createValidate<TupleUnion>());
