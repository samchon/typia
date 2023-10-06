import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_createIsStringify_ConstantAtomicWrapper =
    _test_json_isStringify("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
        ConstantAtomicWrapper,
    )(typia.json.createIsStringify<ConstantAtomicWrapper>());
