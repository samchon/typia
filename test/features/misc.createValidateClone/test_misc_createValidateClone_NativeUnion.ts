import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_misc_createValidateClone_NativeUnion =
    _test_misc_validateClone("NativeUnion")<NativeUnion>(NativeUnion)(
        typia.misc.createValidateClone<NativeUnion>(),
    );
