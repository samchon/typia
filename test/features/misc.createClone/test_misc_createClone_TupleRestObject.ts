import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_createClone_TupleRestObject = _test_misc_clone(
    "TupleRestObject",
)<TupleRestObject>(TupleRestObject)(typia.misc.createClone<TupleRestObject>());
