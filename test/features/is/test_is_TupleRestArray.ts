import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_is_TupleRestArray = _test_is<TupleRestArray>(TupleRestArray)(
    (input) => typia.is(input),
);
