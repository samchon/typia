import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_createAssertGuard_ArraySimpleProtobufNullable =
  _test_assertGuard("ArraySimpleProtobufNullable")<ArraySimpleProtobufNullable>(
    ArraySimpleProtobufNullable,
  )(typia.createAssertGuard<ArraySimpleProtobufNullable>());
