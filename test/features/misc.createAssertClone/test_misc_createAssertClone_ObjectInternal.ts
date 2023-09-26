import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_misc_createAssertClone_ObjectInternal =
    _test_misc_assertClone("ObjectInternal")<ObjectInternal>(ObjectInternal)(
        typia.misc.createAssertClone<ObjectInternal>(),
    );
