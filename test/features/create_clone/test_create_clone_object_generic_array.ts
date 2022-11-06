import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_object_generic_array = _test_clone(
    "generic arraied object",
    ObjectGenericArray.generate,
    TSON.createClone<ObjectGenericArray>(),
);
