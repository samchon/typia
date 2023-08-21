import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_json_isStringify_ToJsonUnion = _test_json_isStringify(
    "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)((input: ToJsonUnion): string | null => {
    const is = (input: any): input is ToJsonUnion => {
        const $io0 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.mobile &&
            "string" === typeof input.name;
        const $io1 = (input: any): boolean => true;
        const $io2 = (input: any): boolean => true;
        const $io3 = (input: any): boolean => true;
        const $iu0 = (input: any): any =>
            (() => {
                if (undefined !== input.id) return $io0(input);
                else
                    return (() => {
                        if ($io3(input)) return $io3(input);
                        else if ($io2(input)) return $io2(input);
                        else if ($io1(input)) return $io1(input);
                        else return false;
                    })();
            })();
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any) =>
                    null !== elem &&
                    undefined !== elem &&
                    ("string" === typeof elem ||
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        ("object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem))),
            )
        );
    };
    const stringify = (input: ToJsonUnion): string => {
        const $io0 = (input: any): boolean =>
            "number" === typeof input.id &&
            "string" === typeof input.mobile &&
            "string" === typeof input.name;
        const $io4 = (input: any): boolean =>
            "string" === typeof input.manufacturer &&
            "string" === typeof input.brand &&
            "string" === typeof input.name;
        const $throws = (typia.json.createIsStringify as any).throws;
        const $string = (typia.json.createIsStringify as any).string;
        const $number = (typia.json.createIsStringify as any).number;
        const $so0 = (input: any): any =>
            `{"id":${$number(input.id)},"mobile":${$string(
                input.mobile,
            )},"name":${$string(input.name)}}`;
        const $so4 = (input: any): any =>
            `{"manufacturer":${$string(input.manufacturer)},"brand":${$string(
                input.brand,
            )},"name":${$string(input.name)}}`;
        const $su0 = (input: any): any =>
            (() => {
                if (undefined !== input.id) return $so0(input);
                else if (undefined !== input.manufacturer) return $so4(input);
                else
                    $throws({
                        expected:
                            "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct)",
                        value: input,
                    });
            })();
        return `[${input
            .map((elem: any) =>
                (() => {
                    if (
                        "object" === typeof elem &&
                        "function" === typeof elem.toJSON
                    )
                        return (() => {
                            if ("boolean" === typeof elem.toJSON())
                                return elem.toJSON();
                            if (
                                "object" === typeof elem.toJSON() &&
                                null !== elem.toJSON()
                            )
                                return $su0(elem.toJSON());
                            $throws({
                                expected:
                                    "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct | boolean)",
                                value: elem.toJSON(),
                            });
                        })();
                    if ("string" === typeof elem) return $string(elem);
                    if ("number" === typeof elem) return $number(elem);
                    if ("object" === typeof elem && null !== elem)
                        return `{"id":${$number(
                            (elem as any).id,
                        )},"mobile":${$string(
                            (elem as any).mobile,
                        )},"name":${$string((elem as any).name)}}`;
                    $throws({
                        expected:
                            "((ToJsonUnion.ICitizen | ToJsonUnion.IProduct | boolean) | ToJsonUnion.ICitizen | number | string)",
                        value: elem,
                    });
                })(),
            )
            .join(",")}]`;
    };
    return is(input) ? stringify(input) : null;
});
