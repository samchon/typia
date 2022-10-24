import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_object_generic_array = _test_stringify(
    "generic arraied object",
    ObjectGenericArray.generate,
    (input) => TSON.stringify(input),
);
