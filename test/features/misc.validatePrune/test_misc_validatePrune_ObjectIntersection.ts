import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_validatePrune_ObjectIntersection =
    _test_misc_validatePrune<ObjectIntersection>(ObjectIntersection)((input) =>
        typia.misc.validatePrune(input),
    );
