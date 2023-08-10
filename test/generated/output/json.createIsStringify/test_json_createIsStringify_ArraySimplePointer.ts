import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ArraySimplePointer } from "../../../structures/ArraySimplePointer";

export const test_json_isStringify_ArraySimplePointer =
    _test_json_isStringify<ArraySimplePointer>(ArraySimplePointer)(
        (input: ArraySimplePointer): string | null => {
            const is = (input: any): input is ArraySimplePointer => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.email &&
                    Array.isArray(input.hobbies) &&
                    input.hobbies.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    );
                const $io2 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.body &&
                    "number" === typeof input.rank &&
                    Number.isFinite(input.rank);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const stringify = (input: ArraySimplePointer): string => {
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.email &&
                    Array.isArray(input.hobbies) &&
                    input.hobbies.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    );
                const $io2 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.body &&
                    "number" === typeof input.rank;
                const $string = (typia.json.createIsStringify as any).string;
                const $number = (typia.json.createIsStringify as any).number;
                const $so0 = (input: any): any =>
                    `{"value":${`[${input.value
                        .map((elem: any) => $so1(elem))
                        .join(",")}]`}}`;
                const $so1 = (input: any): any =>
                    `{"name":${$string(input.name)},"email":${$string(
                        input.email,
                    )},"hobbies":${`[${input.hobbies
                        .map(
                            (elem: any) =>
                                `{"name":${$string(
                                    (elem as any).name,
                                )},"body":${$string(
                                    (elem as any).body,
                                )},"rank":${$number((elem as any).rank)}}`,
                        )
                        .join(",")}]`}}`;
                return $so0(input);
            };
            return is(input) ? stringify(input) : null;
        },
    );
