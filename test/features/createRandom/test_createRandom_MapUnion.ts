import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { MapUnion } from "../../structures/MapUnion";

export const test_createRandom_MapUnion = _test_random("MapUnion")<MapUnion>(
  MapUnion,
)({
  random: typia.createRandom<MapUnion>((MapUnion as any).RANDOM),
  assert: typia.createAssert<MapUnion>(),
});
