import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_createValidate_ObjectSimpleProtobuf = (): void => _test_validate(
    "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf
)(typia.createValidate<ObjectSimpleProtobuf>());
