import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_validateClone_TupleRestObject =
    _test_misc_validateClone<TupleRestObject>(TupleRestObject)((input) =>
        typia.misc.validateClone(input),
    );
