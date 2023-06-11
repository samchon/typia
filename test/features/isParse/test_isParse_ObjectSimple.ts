import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_isParse_ObjectSimple = _test_isParse(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.isParse<ObjectSimple>(input),
    ObjectSimple.SPOILERS,
);
