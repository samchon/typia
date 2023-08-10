import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_random_ConstantEnumeration =
    _test_random<ConstantEnumeration>(ConstantEnumeration)({
        random: typia.createRandom<ConstantEnumeration>(),
        assert: typia.createAssert<ConstantEnumeration>(),
    });
