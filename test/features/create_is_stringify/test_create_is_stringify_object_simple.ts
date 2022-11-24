import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_object_simple = _test_is_stringify(
    "simple object",
    ObjectSimple.generate,
    TSON.createIsStringify<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
