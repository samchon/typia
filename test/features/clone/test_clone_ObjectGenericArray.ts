import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_clone_ObjectGenericArray = _test_clone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.clone(input),
);
