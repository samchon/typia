import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_validate_ArraySimpleProtobuf = _test_validate(
    "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(ArraySimpleProtobuf)(
    typia.createValidate<ArraySimpleProtobuf>(),
);
