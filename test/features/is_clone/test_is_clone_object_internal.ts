import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_internal = _test_is_clone(
    "object internal",
    ObjectInternal.generate,
    (input) => TSON.isClone(input),
    ObjectInternal.SPOILERS,
);
