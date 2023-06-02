import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createAssertParse_ObjectSimple = _test_assertParse(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createAssertParse<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
