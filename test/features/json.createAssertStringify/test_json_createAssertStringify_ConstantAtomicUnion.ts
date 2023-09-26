import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_createAssertStringify_ConstantAtomicUnion =
    _test_json_assertStringify("ConstantAtomicUnion")<ConstantAtomicUnion>(
        ConstantAtomicUnion,
    )(typia.json.createAssertStringify<ConstantAtomicUnion>());
