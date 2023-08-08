import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_clone_ObjectOptional = _test_misc_clone(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.misc.createClone<ObjectOptional>(),
);
