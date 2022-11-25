import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectSimple = _test_isStringify(
    "ObjectSimple",
    ObjectSimple.generate,
    TSON.createIsStringify<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
