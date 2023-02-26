import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_createStringify_NativeAlias = _test_stringify(
    "NativeAlias",
    NativeAlias.generate,
    typia.createStringify<NativeAlias>(),
);
