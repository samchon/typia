import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_validateClone_TupleRestArray =
    _test_misc_validateClone<TupleRestArray>(TupleRestArray)(
        typia.misc.createValidateClone<TupleRestArray>(),
    );
