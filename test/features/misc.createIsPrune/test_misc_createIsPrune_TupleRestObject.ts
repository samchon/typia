import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_isPrune_TupleRestObject =
    _test_misc_isPrune<TupleRestObject>(TupleRestObject)(
        typia.misc.createIsPrune<TupleRestObject>(),
    );
