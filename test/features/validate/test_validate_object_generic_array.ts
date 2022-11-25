import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_object_generic_array = _test_validate(
    "generic arraied object",
    ObjectGenericArray.generate,
    (input) => TSON.validate(input),
    ObjectGenericArray.SPOILERS,
);
