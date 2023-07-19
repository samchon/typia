import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_misc_validatePrune_TupleOptional =
    _test_misc_validatePrune<TupleOptional>(TupleOptional)(
        typia.misc.createValidatePrune<TupleOptional>(),
    );
