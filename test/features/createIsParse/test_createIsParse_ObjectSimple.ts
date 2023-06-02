import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createIsParse_ObjectSimple = _test_isParse(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createIsParse<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
