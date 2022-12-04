import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectInternal = _test_assertParse(
    "ObjectInternal",
    ObjectInternal.generate,
    TSON.createAssertParse<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
