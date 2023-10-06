import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_createAssertEquals_TupleUnion = _test_assertEquals(
    "TupleUnion",
)<TupleUnion>(
    TupleUnion
)(typia.createAssertEquals<TupleUnion>());
