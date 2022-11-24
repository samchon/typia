import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_object_nullable = _test_is_clone(
    "nullable object",
    ObjectNullable.generate,
    TSON.createIsClone<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
