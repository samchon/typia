import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_misc_createValidateClone_TupleRestAtomic = (): void => _test_misc_validateClone(
    "TupleRestAtomic",
)<TupleRestAtomic>(
    TupleRestAtomic
)(typia.misc.createValidateClone<TupleRestAtomic>());
