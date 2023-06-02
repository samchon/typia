import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_createClone_NativeUnion = _test_clone(
    "NativeUnion",
    NativeUnion.generate,
    typia.createClone<NativeUnion>(),
);
