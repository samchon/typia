import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_object_generic_array = _test_is_stringify(
    "generic arraied object",
    ObjectGenericArray.generate,
    (input) => TSON.isStringify(input),
    ObjectGenericArray.SPOILERS,
);
