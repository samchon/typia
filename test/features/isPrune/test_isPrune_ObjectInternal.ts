import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_isPrune_ObjectInternal = _test_isPrune(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.isPrune<ObjectInternal>(input),
    ObjectInternal.SPOILERS,
);
