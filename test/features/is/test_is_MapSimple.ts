import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { MapSimple } from "../../structures/MapSimple";

export const test_is_MapSimple = _test_is("MapSimple")<MapSimple>(MapSimple)(
  (input) => typia.is<MapSimple>(input),
);
