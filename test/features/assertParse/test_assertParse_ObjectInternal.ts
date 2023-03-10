import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_assertParse_ObjectInternal = _test_assertParse(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.assertParse<ObjectInternal>(input),
    ObjectInternal.SPOILERS,
);
