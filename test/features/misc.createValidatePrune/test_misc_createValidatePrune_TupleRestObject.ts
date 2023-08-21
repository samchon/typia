import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_validatePrune_TupleRestObject = _test_misc_validatePrune(
    "TupleRestObject",
)<TupleRestObject>(TupleRestObject)(
    typia.misc.createValidatePrune<TupleRestObject>(),
);
