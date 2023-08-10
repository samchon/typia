import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_assertParse_ConstantAtomicUnion =
    _test_json_assertParse<ConstantAtomicUnion>(ConstantAtomicUnion)(
        typia.json.createAssertParse<ConstantAtomicUnion>(),
    );
