import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectSimple = _test_assertClone(
    "ObjectSimple",
    ObjectSimple.generate,
    TSON.createAssertClone<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);