import TSON from "../../../src";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_null = _test_stringify("null", null, (input) =>
    TSON.stringify(input),
);
