import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createClone_ObjectNullable = _test_clone(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createClone<ObjectNullable>(),
);
