import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_validatePrune_ObjectGenericArray =
    _test_misc_validatePrune(
        "ObjectGenericArray",
        ObjectGenericArray.generate,
        typia.misc.createValidatePrune<ObjectGenericArray>(),
        ObjectGenericArray.SPOILERS,
    );
