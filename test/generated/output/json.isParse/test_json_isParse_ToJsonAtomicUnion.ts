import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_json_isParse_ToJsonAtomicUnion = _test_json_isParse(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(ToJsonAtomicUnion)((input) =>
    ((input: any): typia.Primitive<ToJsonAtomicUnion> => {
        const is = (input: any): input is ToJsonAtomicUnion => {
            const $io0 = (input: any): boolean => true;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    })(input),
);
