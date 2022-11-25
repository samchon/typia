import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectUndefined = _test_equals(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => TSON.equals(input),
);