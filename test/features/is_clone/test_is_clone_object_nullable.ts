import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_nullable = _test_is_clone(
    "nullable object",
    ObjectNullable.generate,
    (input) => TSON.isClone(input),
    ObjectNullable.SPOILERS,
);
