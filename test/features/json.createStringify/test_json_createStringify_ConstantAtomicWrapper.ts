import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_stringify_ConstantAtomicWrapper = _test_json_stringify(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.json.createStringify<ConstantAtomicWrapper>(),
);
