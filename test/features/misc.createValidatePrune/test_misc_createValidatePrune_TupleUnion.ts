import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_misc_createValidatePrune_TupleUnion =
    _test_misc_validatePrune("TupleUnion")<TupleUnion>(TupleUnion)(
        typia.misc.createValidatePrune<TupleUnion>(),
    );
