import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createClone_ObjectOptional = _test_clone(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createClone<ObjectOptional>(),
);
