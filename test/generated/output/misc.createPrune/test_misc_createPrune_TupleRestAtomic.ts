import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_misc_prune_TupleRestAtomic =
    _test_misc_prune<TupleRestAtomic>(TupleRestAtomic)(
        (input: TupleRestAtomic): void => {},
    );
