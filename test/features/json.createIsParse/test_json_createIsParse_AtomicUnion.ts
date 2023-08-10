import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_isParse_AtomicUnion = _test_json_isParse<AtomicUnion>(
    AtomicUnion,
)(typia.json.createIsParse<AtomicUnion>());
