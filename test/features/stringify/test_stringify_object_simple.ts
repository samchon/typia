import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_object_simple = _test_stringify(
    "simple object",
    ObjectSimple.generate(),
    (input) => TSON.stringify(input),
);
