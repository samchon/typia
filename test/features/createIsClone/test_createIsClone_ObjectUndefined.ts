import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectUndefined = _test_isClone(
    "ObjectUndefined",
    ObjectUndefined.generate,
    TSON.createIsClone<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
