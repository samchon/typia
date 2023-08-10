import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_isPrune_ObjectPropertyNullable =
    _test_misc_isPrune<ObjectPropertyNullable>(ObjectPropertyNullable)(
        typia.misc.createIsPrune<ObjectPropertyNullable>(),
    );
