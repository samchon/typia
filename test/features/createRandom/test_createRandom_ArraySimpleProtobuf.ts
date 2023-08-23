import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_random_ArraySimpleProtobuf = _test_random(
    "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(ArraySimpleProtobuf)({
    random: typia.createRandom<ArraySimpleProtobuf>(),
    assert: typia.createAssert<ArraySimpleProtobuf>(),
});
