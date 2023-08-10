import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_misc_assertPrune_TupleOptional =
    _test_misc_assertPrune<TupleOptional>(TupleOptional)((input) =>
        typia.misc.assertPrune<TupleOptional>(input),
    );
