import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_random_MapSimpleProtobufOptional = _test_random(
  "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
  random: () =>
    typia.random<MapSimpleProtobufOptional>(
      (MapSimpleProtobufOptional as any).RANDOM,
    ),
  assert: typia.createAssert<MapSimpleProtobufOptional>(),
});
