import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_createRandom_ObjectSimpleProtobuf = _test_random(
    "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)({
    random: typia.createRandom<ObjectSimpleProtobuf>(),
    assert: typia.createAssert<ObjectSimpleProtobuf>(),
});
