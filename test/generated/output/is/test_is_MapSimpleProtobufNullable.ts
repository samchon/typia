import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { MapSimpleProtobufNullable } from "../../../structures/MapSimpleProtobufNullable";

export const test_is_MapSimpleProtobufNullable = _test_is(
    "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)((input) =>
    ((input: any): input is MapSimpleProtobufNullable => {
        const $io0 = (input: any): boolean =>
            (null === input.boolean ||
                (input.boolean instanceof Map &&
                    (() =>
                        [...input.boolean].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "string" === typeof elem[0] &&
                                "boolean" === typeof elem[1],
                        ))())) &&
            (null === input.int32 ||
                (input.int32 instanceof Map &&
                    (() =>
                        [...input.int32].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "string" === typeof elem[0] &&
                                "number" === typeof elem[1] &&
                                Number.isFinite(elem[1]) &&
                                Math.floor(elem[1]) === elem[1] &&
                                -2147483648 <= elem[1] &&
                                elem[1] <= 2147483647,
                        ))())) &&
            (null === input.bigint ||
                (input.bigint instanceof Map &&
                    (() =>
                        [...input.bigint].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "string" === typeof elem[0] &&
                                "bigint" === typeof elem[1],
                        ))())) &&
            (null === input.double ||
                (input.double instanceof Map &&
                    (() =>
                        [...input.double].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "string" === typeof elem[0] &&
                                "number" === typeof elem[1] &&
                                Number.isFinite(elem[1]),
                        ))())) &&
            (null === input.string ||
                (input.string instanceof Map &&
                    (() =>
                        [...input.string].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "string" === typeof elem[0] &&
                                "string" === typeof elem[1] &&
                                1 <= elem[1].length,
                        ))())) &&
            (null === input.bytes ||
                (input.bytes instanceof Map &&
                    (() =>
                        [...input.bytes].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "string" === typeof elem[0] &&
                                elem[1] instanceof Uint8Array,
                        ))())) &&
            (null === input.objects ||
                (input.objects instanceof Map &&
                    (() =>
                        [...input.objects].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "string" === typeof elem[0] &&
                                "object" === typeof elem[1] &&
                                null !== elem[1] &&
                                $io0(elem[1]),
                        ))()));
        return "object" === typeof input && null !== input && $io0(input);
    })(input),
);
