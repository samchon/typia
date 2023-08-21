import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_is_TagAtomicUnion = _test_is(
    "TagAtomicUnion",
)<TagAtomicUnion>(TagAtomicUnion)((input) =>
    ((input: any): input is TagAtomicUnion => {
        const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            );
        const $io1 = (input: any): boolean =>
            ("string" === typeof input.value &&
                3 <= input.value.length &&
                7 >= input.value.length) ||
            ("number" === typeof input.value &&
                Number.isFinite(input.value) &&
                3 <= input.value);
        return "object" === typeof input && null !== input && $io0(input);
    })(input),
);
