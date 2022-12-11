import TSON from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TupleRestArray = _test_equals(
    "TupleRestArray",
    TupleRestArray.generate,
    TSON.createEquals<TupleRestArray>(),
);
