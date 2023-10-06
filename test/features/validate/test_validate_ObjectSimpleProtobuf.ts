import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_validate_ObjectSimpleProtobuf = _test_validate(
    "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf
)((input) => typia.validate<ObjectSimpleProtobuf>(input));
