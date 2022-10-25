import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_object_internal = _test_is_stringify(
    "object internal",
    ObjectInternal.generate,
    TSON.createIsStringify<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
