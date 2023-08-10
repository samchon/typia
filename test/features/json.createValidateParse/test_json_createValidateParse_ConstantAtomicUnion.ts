import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_validateParse_ConstantAtomicUnion =
    _test_json_validateParse<ConstantAtomicUnion>(ConstantAtomicUnion)(
        typia.json.createValidateParse<ConstantAtomicUnion>(),
    );
