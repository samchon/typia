import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_createValidate_ObjectSimpleProtobufNullable = _test_validate(
    "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(
    ObjectSimpleProtobufNullable
)(typia.createValidate<ObjectSimpleProtobufNullable>());
