import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createAssertGuardEquals_TupleRestArray =
    _test_assertGuardEquals("TupleRestArray")<TupleRestArray>(TupleRestArray)(
        typia.createAssertGuardEquals<TupleRestArray>(),
    );
