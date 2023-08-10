import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_equals_AtomicIntersection = _test_equals<AtomicIntersection>(
    AtomicIntersection,
)(typia.createEquals<AtomicIntersection>());
