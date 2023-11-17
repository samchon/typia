import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_createAssert_MapSimpleProtobuf = _test_assert(
  "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)(
  typia.createAssert<MapSimpleProtobuf>(),
);
