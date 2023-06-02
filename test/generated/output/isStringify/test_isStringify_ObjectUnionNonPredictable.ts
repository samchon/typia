import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_isStringify_ObjectUnionNonPredictable = _test_isStringify(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) =>
        ((
            input: Array<
                ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
            >,
        ): string | null => {
            const is: any = (
                input: any,
            ): input is Array<
                ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
            > => {
                const $io0: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io1(input.value);
                const $io1: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $iu0(input.value);
                const $io2: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "boolean" === typeof input.value.value;
                const $io4: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "number" === typeof input.value.value &&
                    Number.isFinite(input.value.value);
                const $io6: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "string" === typeof input.value.value;
                const $iu0: any = (input: any): any =>
                    (() => {
                        if ($io6(input)) return $io6(input);
                        if ($io4(input)) return $io4(input);
                        if ($io2(input)) return $io2(input);
                        return false;
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const stringify: any = (
                input: Array<
                    ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                >,
            ): string => {
                const $io1: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $iu0(input.value);
                const $io2: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io3(input.value);
                const $io3: any = (input: any): boolean =>
                    "boolean" === typeof input.value;
                const $io4: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io5(input.value);
                const $io5: any = (input: any): boolean =>
                    "number" === typeof input.value;
                const $io6: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io7(input.value);
                const $io7: any = (input: any): boolean =>
                    "string" === typeof input.value;
                const $iu0: any = (input: any): any =>
                    $io6(input) || $io4(input) || $io2(input);
                const $number: any = (typia.isStringify as any).number;
                const $string: any = (typia.isStringify as any).string;
                const $throws: any = (typia.isStringify as any).throws;
                const $so0: any = (input: any): any =>
                    `{"value":${$so1(input.value)}}`;
                const $so1: any = (input: any): any =>
                    `{"value":${$su0(input.value)}}`;
                const $so2: any = (input: any): any =>
                    `{"value":${`{"value":${input.value.value}}`}}`;
                const $so4: any = (input: any): any =>
                    `{"value":${`{"value":${$number(input.value.value)}}`}}`;
                const $so6: any = (input: any): any =>
                    `{"value":${`{"value":${$string(input.value.value)}}`}}`;
                const $su0: any = (input: any): any =>
                    (() => {
                        if ($io6(input)) return $so6(input);
                        if ($io4(input)) return $so4(input);
                        if ($io2(input)) return $so2(input);
                        $throws({
                            expected:
                                "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
                            value: input,
                        });
                    })();
                return (() =>
                    `[${input.map((elem: any) => $so0(elem)).join(",")}]`)();
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ObjectUnionNonPredictable.SPOILERS,
);
