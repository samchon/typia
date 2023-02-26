import typia from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectGeneric = _test_clone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createClone<ObjectGeneric>(),
);
