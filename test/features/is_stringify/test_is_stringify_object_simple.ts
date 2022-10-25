import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_object_simple = _test_is_stringify(
    "simple object",
    ObjectSimple.generate,
    (input) => TSON.isStringify(input),
    ObjectSimple.SPOILERS,
);
