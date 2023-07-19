import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_isClone_ObjectOptional =
    _test_misc_isClone<ObjectOptional>(ObjectOptional)((input) =>
        typia.misc.isClone(input),
    );
