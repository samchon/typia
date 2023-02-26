import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_createStringify_NativeUnion = _test_stringify(
    "NativeUnion",
    NativeUnion.generate,
    typia.createStringify<NativeUnion>(),
);
