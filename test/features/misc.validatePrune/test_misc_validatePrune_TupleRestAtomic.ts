import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_misc_validatePrune_TupleRestAtomic =
    _test_misc_validatePrune<TupleRestAtomic>(TupleRestAtomic)((input) =>
        typia.misc.validatePrune<TupleRestAtomic>(input),
    );
