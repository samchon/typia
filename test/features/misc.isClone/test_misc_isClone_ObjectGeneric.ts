import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_isClone_ObjectGeneric =
    _test_misc_isClone<ObjectGeneric>(ObjectGeneric)((input) =>
        typia.misc.isClone(input),
    );
