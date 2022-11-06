import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_clone } from "./_test_clone";

export const test_clone_object_generic_array = _test_clone(
    "generic arraied object",
    ObjectGenericArray.generate,
    (input) => TSON.clone(input),
);
