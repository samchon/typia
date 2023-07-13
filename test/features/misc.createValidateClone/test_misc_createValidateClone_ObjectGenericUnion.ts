import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_validateClone_ObjectGenericUnion =
    _test_misc_validateClone(
        "ObjectGenericUnion",
        ObjectGenericUnion.generate,
        typia.misc.createValidateClone<ObjectGenericUnion>(),
        ObjectGenericUnion.SPOILERS,
    );
