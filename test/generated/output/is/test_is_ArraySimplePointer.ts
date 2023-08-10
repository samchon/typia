import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ArraySimplePointer } from "../../../structures/ArraySimplePointer";

export const test_is_ArraySimplePointer = _test_is<ArraySimplePointer>(
    ArraySimplePointer,
)((input) =>
    ((input: any): input is IPointer<Array<ArraySimplePointer.IPerson>> => {
        const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            );
        const $io1 = (input: any): boolean =>
            "string" === typeof input.name &&
            "string" === typeof input.email &&
            Array.isArray(input.hobbies) &&
            input.hobbies.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            );
        const $io2 = (input: any): boolean =>
            "string" === typeof input.name &&
            "string" === typeof input.body &&
            "number" === typeof input.rank &&
            Number.isFinite(input.rank);
        return "object" === typeof input && null !== input && $io0(input);
    })(input),
);
