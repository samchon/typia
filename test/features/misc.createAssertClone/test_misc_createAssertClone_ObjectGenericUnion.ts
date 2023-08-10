import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_assertClone_ObjectGenericUnion =
    _test_misc_assertClone<ObjectGenericUnion>(ObjectGenericUnion)(
        typia.misc.createAssertClone<ObjectGenericUnion>(),
    );
