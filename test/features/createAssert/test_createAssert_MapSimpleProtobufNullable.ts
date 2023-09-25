import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_createAssert_MapSimpleProtobufNullable = _test_assert(
    "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)(
    typia.createAssert<MapSimpleProtobufNullable>(),
);
