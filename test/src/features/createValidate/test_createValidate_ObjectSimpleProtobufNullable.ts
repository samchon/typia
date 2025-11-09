import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_createValidate_ObjectSimpleProtobufNullable = (): void => _test_validate(
    "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(
    ObjectSimpleProtobufNullable
)(typia.createValidate<ObjectSimpleProtobufNullable>());
