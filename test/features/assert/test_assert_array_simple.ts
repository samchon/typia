import TSON from "../../../src";
import { IArraySimple } from "../../structures/IArraySimple";
import { _test_assert } from "./_test_assert";

export const test_assert_array_simple = _test_assert(
    "simple array",
    IArraySimple.generate(),
    (input) => TSON.assert(input),
);
