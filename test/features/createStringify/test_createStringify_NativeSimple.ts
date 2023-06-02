import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_createStringify_NativeSimple = _test_stringify(
    "NativeSimple",
    NativeSimple.generate,
    typia.createStringify<NativeSimple>(),
);
