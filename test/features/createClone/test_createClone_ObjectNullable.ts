import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectNullable = _test_clone(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createClone<ObjectNullable>(),
);