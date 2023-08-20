import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_clone_ObjectGeneric = _test_clone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.clone<ObjectGeneric>(input),
);
