import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_clone_ObjectNullable = _test_clone(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.clone(input),
);
