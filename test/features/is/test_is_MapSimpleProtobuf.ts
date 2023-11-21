import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_is_MapSimpleProtobuf = _test_is(
  "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)((input) =>
  typia.is<MapSimpleProtobuf>(input),
);
