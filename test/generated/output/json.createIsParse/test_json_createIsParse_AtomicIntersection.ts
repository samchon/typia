import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_json_createIsParse_AtomicIntersection = _test_json_isParse(
    "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)(
    (input: any): typia.Primitive<AtomicIntersection> => {
        const is = (input: any): input is AtomicIntersection => {
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                Number.isFinite(input[1]) &&
                "string" === typeof input[2]
            );
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
);
