import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_isClone_ObjectInternal = _test_isClone(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.isClone<ObjectInternal>(input),
    ObjectInternal.SPOILERS,
);
