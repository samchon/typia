import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_validateClone_ObjectInternal = _test_validateClone(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.validateClone<ObjectInternal>(input),
    ObjectInternal.SPOILERS,
);
