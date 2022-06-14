import TSON from "../../../src";
import { IObjectSimple } from "../../structures/IObjectSimple";
import { _test_assert } from "./_test_assert";

export const test_assert_object_simple = _test_assert(
    "simple object",
    IObjectSimple.generate(),
    (input) => TSON.assert(input),
);
