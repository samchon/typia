import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectSimple = _test_assertParse(
    "ObjectSimple",
    ObjectSimple.generate,
    TSON.createAssertParse<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
