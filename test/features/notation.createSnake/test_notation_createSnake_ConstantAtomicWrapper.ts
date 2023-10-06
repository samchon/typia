import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_notation_createValidateSnake_ConstantAtomicWrapper =
    _test_notation_validateGeneral("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
        ConstantAtomicWrapper
    )<typia.SnakeCase<ConstantAtomicWrapper>>({
        convert: (input) => typia.notations.validateSnake<ConstantAtomicWrapper>(input),
        assert: typia.createAssert<typia.SnakeCase<ConstantAtomicWrapper>>(),
    });
