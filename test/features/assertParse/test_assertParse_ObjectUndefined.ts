import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_assertParse_ObjectUndefined = _test_assertParse(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.assertParse<ObjectUndefined>(input),
    ObjectUndefined.SPOILERS,
);
