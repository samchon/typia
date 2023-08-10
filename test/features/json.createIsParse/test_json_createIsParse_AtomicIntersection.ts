import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_isParse_AtomicIntersection =
    _test_json_isParse<AtomicIntersection>(AtomicIntersection)(
        typia.json.createIsParse<AtomicIntersection>(),
    );
