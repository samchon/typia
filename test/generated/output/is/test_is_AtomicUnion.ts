import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_is_AtomicUnion = _test_is("AtomicUnion")<AtomicUnion>(
    AtomicUnion,
)((input) =>
    ((input: any): input is AtomicUnion => {
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any) =>
                    null === elem ||
                    "string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    "boolean" === typeof elem,
            )
        );
    })(input),
);
