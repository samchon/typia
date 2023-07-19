import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_assertClone_ObjectOptional =
    _test_misc_assertClone<ObjectOptional>(ObjectOptional)((input) =>
        typia.misc.assertClone(input),
    );
