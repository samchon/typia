import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_is } from "../internal/_test_is";

export const test_is_object_generic_array = _test_is(
    "generic arraied object",
    ObjectGenericArray.generate,
    (input) => TSON.is(input),
    ObjectGenericArray.SPOILERS,
);
