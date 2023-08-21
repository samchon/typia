import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_json_validateStringify_ConstantAtomicSimple =
    _test_json_validateStringify("ConstantAtomicSimple")<ConstantAtomicSimple>(
        ConstantAtomicSimple,
    )(typia.json.createValidateStringify<ConstantAtomicSimple>());
