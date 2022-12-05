import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectUndefined = _test_isParse(
    "ObjectUndefined",
    ObjectUndefined.generate,
    TSON.createIsParse<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
