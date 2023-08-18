import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_json_stringify_ToJsonUnion =
    _test_json_stringify<ToJsonUnion>(ToJsonUnion)(
        (input: ToJsonUnion): string => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.mobile &&
                "string" === typeof input.name;
            const $io4 = (input: any): boolean =>
                "string" === typeof input.manufacturer &&
                "string" === typeof input.brand &&
                "string" === typeof input.name;
            const $throws = (typia.json.createStringify as any).throws;
            const $string = (typia.json.createStringify as any).string;
            const $number = (typia.json.createStringify as any).number;
            const $so0 = (input: any): any =>
                `{"id":${$number(input.id)},"mobile":${$string(
                    input.mobile,
                )},"name":${$string(input.name)}}`;
            const $so4 = (input: any): any =>
                `{"manufacturer":${$string(
                    input.manufacturer,
                )},"brand":${$string(input.brand)},"name":${$string(
                    input.name,
                )}}`;
            const $su0 = (input: any): any =>
                (() => {
                    if (undefined !== input.id) return $so0(input);
                    else if (undefined !== input.manufacturer)
                        return $so4(input);
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
        },
    );
