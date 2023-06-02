import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createClone_ObjectGeneric = _test_clone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createClone<ObjectGeneric>(),
);
