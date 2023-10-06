import typia from "../../../src";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_createAssertClone_TupleRestObject = _test_misc_assertClone(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)(typia.misc.createAssertClone<TupleRestObject>());
