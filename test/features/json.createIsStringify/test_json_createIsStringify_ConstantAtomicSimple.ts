import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_json_isStringify_ConstantAtomicSimple =
    _test_json_isStringify(
        "ConstantAtomicSimple",
        ConstantAtomicSimple.generate,
        typia.json.createIsStringify<ConstantAtomicSimple>(),
        ConstantAtomicSimple.SPOILERS,
    );
