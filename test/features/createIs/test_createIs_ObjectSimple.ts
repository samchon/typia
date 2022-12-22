import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectSimple = _test_is(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createIs<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
