import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { MapUnion } from "../../structures/MapUnion";

export const test_validate_MapUnion = _test_validate("MapUnion")<MapUnion>(
    MapUnion,
)(typia.createValidate<MapUnion>());
