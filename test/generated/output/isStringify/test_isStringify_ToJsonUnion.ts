import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_isStringify_ToJsonUnion = _test_isStringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) =>
        ((
            input: Array<
                | string
                | number
                | ToJsonUnion.ICitizen
                | ToJsonUnion.IWrapper<boolean>
                | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>
                | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>
            >,
        ): string | null => {
            const is: any = (
                input: any,
            ): input is Array<
                | string
                | number
                | ToJsonUnion.ICitizen
                | ToJsonUnion.IWrapper<boolean>
                | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>
                | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>
            > => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.mobile &&
                    "string" === typeof input.name;
                const $io1: any = (input: any): boolean => true;
                const $io2: any = (input: any): boolean => true;
                const $io3: any = (input: any): boolean => true;
                const $iu0: any = (input: any): any =>
                    (() => {
                        if (undefined !== input.id) return $io0(input);
                        return (() => {
                            if ($io3(input)) return $io3(input);
                            if ($io2(input)) return $io2(input);
                            if ($io1(input)) return $io1(input);
                            return false;
                        })();
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            null !== elem &&
                            undefined !== elem &&
                            ("string" === typeof elem ||
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                ("object" === typeof elem &&
                                    null !== elem &&
                                    $iu0(elem))),
                    )
                );
            };
            const stringify: any = (
                input: Array<
                    | string
                    | number
                    | ToJsonUnion.ICitizen
                    | ToJsonUnion.IWrapper<boolean>
                    | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>
                    | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>
                >,
            ): string => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.mobile &&
                    "string" === typeof input.name;
                const $io1: any = (input: any): boolean =>
                    "string" === typeof input.manufacturer &&
                    "string" === typeof input.brand &&
                    "string" === typeof input.name;
                const $string: any = (typia.isStringify as any).string;
                const $number: any = (typia.isStringify as any).number;
                const $throws: any = (typia.isStringify as any).throws;
                const $so0: any = (input: any): any =>
                    `{"id":${$number(input.id)},"mobile":${$string(
                        input.mobile,
                    )},"name":${$string(input.name)}}`;
                const $so1: any = (input: any): any =>
                    `{"manufacturer":${$string(
                        input.manufacturer,
                    )},"brand":${$string(input.brand)},"name":${$string(
                        input.name,
                    )}}`;
                const $su0: any = (input: any): any =>
                    (() => {
                        if (undefined !== input.id) return $so0(input);
                        if (undefined !== input.manufacturer)
                            return $so1(input);
                        $throws({
                            expected:
                                "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct)",
                            value: input,
                        });
                    })();
                return (() =>
                    `[${input
                        .map((elem: any) =>
                            (() => {
                                if (
                                    "object" === typeof elem &&
                                    "function" === typeof elem.toJSON
                                )
                                    return JSON.stringify(elem.toJSON());
                                if ("string" === typeof elem)
                                    return $string(elem);
                                if ("number" === typeof elem)
                                    return $number(elem);
                                if ("boolean" === typeof elem) return elem;
                                if ("object" === typeof elem && null !== elem)
                                    return $su0(elem);
                                $throws({
                                    expected:
                                        "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct | boolean | number | string | unknown)",
                                    value: elem,
                                });
                            })(),
                        )
                        .join(",")}]`)();
            };
            return is(input) ? stringify(input) : null;
        })(input),
);
