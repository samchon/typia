import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_equals_ConstantAtomicSimple =
    _test_equals<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
        typia.equals<ConstantAtomicSimple>(input),
    );
