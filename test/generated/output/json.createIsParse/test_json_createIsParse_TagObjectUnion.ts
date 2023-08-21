import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_json_isParse_TagObjectUnion = _test_json_isParse(
    "TagObjectUnion",
)<TagObjectUnion>(TagObjectUnion)(
    (input: any): typia.Primitive<TagObjectUnion> => {
        const is = (input: any): input is TagObjectUnion => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.value &&
                Number.isFinite(input.value) &&
                3 <= input.value;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.value &&
                3 <= input.value.length &&
                7 >= input.value.length;
            const $iu0 = (input: any): any =>
                (() => {
                    if ("string" === typeof input.value) return $io1(input);
                    else if (
                        "number" === typeof input.value &&
                        Number.isFinite(input.value)
                    )
                        return $io0(input);
                    else return false;
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $iu0(elem),
                )
            );
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
);
