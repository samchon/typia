import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_json_isStringify_ObjectUnionDouble = _test_json_isStringify(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
    ((input: ObjectUnionDouble): string | null => {
        const is = (input: any): input is ObjectUnionDouble => {
            const $io0 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "number" === typeof (input.value as any).x &&
                Number.isFinite((input.value as any).x) &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu1(input.child);
            const $io2 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "boolean" === typeof (input.value as any).y;
            const $io4 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "number" === typeof (input.value as any).y &&
                Number.isFinite((input.value as any).y);
            const $io6 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "string" === typeof (input.value as any).x &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu2(input.child);
            const $io8 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "string" === typeof (input.value as any).y;
            const $io10 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io11(input.value);
            const $io11 = (input: any): boolean =>
                Array.isArray(input.y) &&
                input.y.every(
                    (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                );
            const $iu0 = (input: any): any =>
                (() => {
                    if ($io6(input)) return $io6(input);
                    else if ($io0(input)) return $io0(input);
                    else return false;
                })();
            const $iu1 = (input: any): any =>
                (() => {
                    if ($io4(input)) return $io4(input);
                    else if ($io2(input)) return $io2(input);
                    else return false;
                })();
            const $iu2 = (input: any): any =>
                (() => {
                    if ($io10(input)) return $io10(input);
                    else if ($io8(input)) return $io8(input);
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
        const stringify = (input: ObjectUnionDouble): string => {
            const $io0 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io1(input.value) &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu1(input.child);
            const $io1 = (input: any): boolean => "number" === typeof input.x;
            const $io2 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io3(input.value);
            const $io3 = (input: any): boolean => "boolean" === typeof input.y;
            const $io4 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io5(input.value);
            const $io5 = (input: any): boolean => "number" === typeof input.y;
            const $io6 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io7(input.value) &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu2(input.child);
            const $io7 = (input: any): boolean => "string" === typeof input.x;
            const $io8 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io9(input.value);
            const $io9 = (input: any): boolean => "string" === typeof input.y;
            const $io10 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io11(input.value);
            const $io11 = (input: any): boolean =>
                Array.isArray(input.y) &&
                input.y.every((elem: any) => "number" === typeof elem);
            const $iu1 = (input: any): any => $io4(input) || $io2(input);
            const $iu2 = (input: any): any => $io10(input) || $io8(input);
            const $number = (typia.json.isStringify as any).number;
            const $string = (typia.json.isStringify as any).string;
            const $throws = (typia.json.isStringify as any).throws;
            const $so0 = (input: any): any =>
                `{"value":${`{"x":${$number(
                    (input.value as any).x,
                )}}`},"child":${$su1(input.child)}}`;
            const $so2 = (input: any): any =>
                `{"value":${`{"y":${(input.value as any).y}}`}}`;
            const $so4 = (input: any): any =>
                `{"value":${`{"y":${$number((input.value as any).y)}}`}}`;
            const $so6 = (input: any): any =>
                `{"value":${`{"x":${$string(
                    (input.value as any).x,
                )}}`},"child":${$su2(input.child)}}`;
            const $so8 = (input: any): any =>
                `{"value":${`{"y":${$string((input.value as any).y)}}`}}`;
            const $so10 = (input: any): any =>
                `{"value":${$so11(input.value)}}`;
            const $so11 = (input: any): any =>
                `{"y":${`[${input.y
                    .map((elem: any) => $number(elem))
                    .join(",")}]`}}`;
            const $su0 = (input: any): any =>
                (() => {
                    if ($io6(input)) return $so6(input);
                    else if ($io0(input)) return $so0(input);
                    else
                        $throws({
                            expected:
                                "(ObjectUnionDouble.IB | ObjectUnionDouble.IA)",
                            value: input,
                        });
                })();
            const $su1 = (input: any): any =>
                (() => {
                    if ($io4(input)) return $so4(input);
                    else if ($io2(input)) return $so2(input);
                    else
                        $throws({
                            expected:
                                "(ObjectUnionDouble.IAB | ObjectUnionDouble.IAA)",
                            value: input,
                        });
                })();
            const $su2 = (input: any): any =>
                (() => {
                    if ($io10(input)) return $so10(input);
                    else if ($io8(input)) return $so8(input);
                    else
                        $throws({
                            expected:
                                "(ObjectUnionDouble.IBB | ObjectUnionDouble.IBA)",
                            value: input,
                        });
                })();
            return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
        };
        return is(input) ? stringify(input) : null;
    })(input),
);
