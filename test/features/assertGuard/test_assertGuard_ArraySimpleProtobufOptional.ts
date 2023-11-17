import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_assertGuard_ArraySimpleProtobufOptional = _test_assertGuard(
    "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)((input) =>
    typia.assertGuard<ArraySimpleProtobufOptional>(input),
);
