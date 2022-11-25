import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectInternal = _test_assertClone(
    "ObjectInternal",
    ObjectInternal.generate,
    TSON.createAssertClone<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);