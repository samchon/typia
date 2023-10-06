import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_createAssert_ObjectSimpleProtobuf = _test_assert(
    "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)(
    typia.createAssert<ObjectSimpleProtobuf>(),
);
