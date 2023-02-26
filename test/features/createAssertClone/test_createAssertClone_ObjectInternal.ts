import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createAssertClone_ObjectInternal = _test_assertClone(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createAssertClone<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
