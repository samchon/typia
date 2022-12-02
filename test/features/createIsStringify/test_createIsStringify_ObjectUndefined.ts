import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectUndefined = _test_isStringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    TSON.createIsStringify<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
