import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_validatePrune_ObjectGenericUnion =
    _test_misc_validatePrune(
        "ObjectGenericUnion",
        ObjectGenericUnion.generate,
        (input) => typia.misc.validatePrune(input),
        ObjectGenericUnion.SPOILERS,
    );
