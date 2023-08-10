import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_isClone_ObjectGenericUnion =
    _test_misc_isClone<ObjectGenericUnion>(ObjectGenericUnion)(
        typia.misc.createIsClone<ObjectGenericUnion>(),
    );
