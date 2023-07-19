import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_assertPrune_TupleRestObject =
    _test_misc_assertPrune<TupleRestObject>(TupleRestObject)(
        typia.misc.createAssertPrune<TupleRestObject>(),
    );
