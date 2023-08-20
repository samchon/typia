import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_assertClone_ObjectInternal = _test_assertClone(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.assertClone<ObjectInternal>(input),
    ObjectInternal.SPOILERS,
);
