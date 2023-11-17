import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createAssertGuard_TupleRestObject = _test_assertGuard(
    "TupleRestObject",
)<TupleRestObject>(TupleRestObject)(typia.createAssertGuard<TupleRestObject>());
