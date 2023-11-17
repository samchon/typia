import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_assertGuard_ArraySimpleProtobuf = _test_assertGuard(
    "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(ArraySimpleProtobuf)((input) =>
    typia.assertGuard<ArraySimpleProtobuf>(input),
);
