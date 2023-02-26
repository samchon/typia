import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createClone_ObjectDynamic = _test_clone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createClone<ObjectDynamic>(),
);
