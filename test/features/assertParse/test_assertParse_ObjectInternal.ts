import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectInternal = _test_assertParse(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => TSON.assertParse<ObjectInternal>(input),
    ObjectInternal.SPOILERS,
);
