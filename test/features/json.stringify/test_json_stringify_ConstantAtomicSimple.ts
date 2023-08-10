import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_json_stringify_ConstantAtomicSimple =
    _test_json_stringify<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
        typia.json.stringify<ConstantAtomicSimple>(input),
    );
