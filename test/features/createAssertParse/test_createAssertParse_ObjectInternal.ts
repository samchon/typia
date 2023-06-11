import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createAssertParse_ObjectInternal = _test_assertParse(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createAssertParse<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
