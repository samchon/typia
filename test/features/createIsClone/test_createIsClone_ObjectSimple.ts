import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectSimple = _test_isClone(
    "ObjectSimple",
    ObjectSimple.generate,
    TSON.createIsClone<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
