import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_createStringify_ObjectUnionDouble = _test_stringify(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input: ObjectUnionDouble): string => {
        const $io0: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io1(input.value) &&
            "object" === typeof input.child &&
            null !== input.child &&
            $iu1(input.child);
        const $io1: any = (input: any): boolean => "number" === typeof input.x;
        const $io2: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io3(input.value);
        const $io3: any = (input: any): boolean => "boolean" === typeof input.y;
        const $io4: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io5(input.value);
        const $io5: any = (input: any): boolean => "number" === typeof input.y;
        const $io6: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io7(input.value) &&
            "object" === typeof input.child &&
            null !== input.child &&
            $iu2(input.child);
        const $io7: any = (input: any): boolean => "string" === typeof input.x;
        const $io8: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io9(input.value);
        const $io9: any = (input: any): boolean => "string" === typeof input.y;
        const $io10: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io11(input.value);
        const $io11: any = (input: any): boolean =>
            Array.isArray(input.y) &&
            input.y.every((elem: any) => "number" === typeof elem);
        const $iu1: any = (input: any): any => $io4(input) || $io2(input);
        const $iu2: any = (input: any): any => $io10(input) || $io8(input);
        const $number: any = (typia.createStringify as any).number;
        const $string: any = (typia.createStringify as any).string;
        const $throws: any = (typia.createStringify as any).throws;
        const $so0: any = (input: any): any =>
            `{"value":${`{"x":${$number(input.value.x)}}`},"child":${$su1(
                input.child,
            )}}`;
        const $so2: any = (input: any): any =>
            `{"value":${`{"y":${input.value.y}}`}}`;
        const $so4: any = (input: any): any =>
            `{"value":${`{"y":${$number(input.value.y)}}`}}`;
        const $so6: any = (input: any): any =>
            `{"value":${`{"x":${$string(input.value.x)}}`},"child":${$su2(
                input.child,
            )}}`;
        const $so8: any = (input: any): any =>
            `{"value":${`{"y":${$string(input.value.y)}}`}}`;
        const $so10: any = (input: any): any =>
            `{"value":${$so11(input.value)}}`;
        const $so11: any = (input: any): any =>
            `{"y":${(() =>
                `[${input.y
                    .map((elem: any) => $number(elem))
                    .join(",")}]`)()}}`;
        const $su0: any = (input: any): any =>
            (() => {
                if ($io6(input)) return $so6(input);
                if ($io0(input)) return $so0(input);
                $throws({
                    expected: "(ObjectUnionDouble.IB | ObjectUnionDouble.IA)",
                    value: input,
                });
            })();
        const $su1: any = (input: any): any =>
            (() => {
                if ($io4(input)) return $so4(input);
                if ($io2(input)) return $so2(input);
                $throws({
                    expected: "(ObjectUnionDouble.IAB | ObjectUnionDouble.IAA)",
                    value: input,
                });
            })();
        const $su2: any = (input: any): any =>
            (() => {
                if ($io10(input)) return $so10(input);
                if ($io8(input)) return $so8(input);
                $throws({
                    expected: "(ObjectUnionDouble.IBB | ObjectUnionDouble.IBA)",
                    value: input,
                });
            })();
        return (() => `[${input.map((elem: any) => $su0(elem)).join(",")}]`)();
    },
);
