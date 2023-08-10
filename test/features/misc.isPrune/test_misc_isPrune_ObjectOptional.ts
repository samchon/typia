import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_isPrune_ObjectOptional =
    _test_misc_isPrune<ObjectOptional>(ObjectOptional)((input) =>
        typia.misc.isPrune<ObjectOptional>(input),
    );
