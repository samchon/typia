import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_is } from "./../is/_test_is";

export const test_create_is_object_internal = _test_is(
    "object internal",
    ObjectInternal.generate,
    TSON.createIs<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
