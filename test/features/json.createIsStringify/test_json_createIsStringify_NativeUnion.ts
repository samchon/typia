import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_json_isStringify_NativeUnion = _test_json_isStringify(
    "NativeUnion",
    NativeUnion.generate,
    typia.json.createIsStringify<NativeUnion>(),
    NativeUnion.SPOILERS,
);
