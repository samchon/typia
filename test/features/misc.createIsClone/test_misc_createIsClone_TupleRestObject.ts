import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_createIsClone_TupleRestObject = _test_misc_isClone(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)(typia.misc.createIsClone<TupleRestObject>());
