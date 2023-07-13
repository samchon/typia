import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_validateParse_AtomicIntersection =
    _test_json_validateParse(
        "AtomicIntersection",
        AtomicIntersection.generate,
        typia.json.createValidateParse<AtomicIntersection>(),
        AtomicIntersection.SPOILERS,
    );
