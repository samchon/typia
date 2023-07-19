import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_isStringify_ConstantAtomicWrapper =
    _test_json_isStringify<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
        (input) => typia.json.isStringify(input),
    );
