import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectGenericArray = _test_clone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => TSON.clone(input),
);