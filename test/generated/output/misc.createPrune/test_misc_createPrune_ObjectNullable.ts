import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_misc_prune_ObjectNullable = _test_misc_prune<ObjectNullable>(
    ObjectNullable,
)((input: ObjectNullable): void => {
    const $io1 = (input: any): boolean =>
        "string" === typeof input.name &&
        "object" === typeof input.manufacturer &&
        null !== input.manufacturer &&
        $io2(input.manufacturer) &&
        (null === input.brand ||
            ("object" === typeof input.brand &&
                null !== input.brand &&
                $io3(input.brand))) &&
        (null === input.similar ||
            ("object" === typeof input.similar &&
                null !== input.similar &&
                $iu0(input.similar)));
    const $io2 = (input: any): boolean =>
        "manufacturer" === input.type && "string" === typeof input.name;
    const $io3 = (input: any): boolean =>
        "brand" === input.type && "string" === typeof input.name;
    const $iu0 = (input: any): any =>
        (() => {
            if ("brand" === input.type) return $io3(input);
            if ("manufacturer" === input.type) return $io2(input);
            return false;
        })();
    const $throws = (typia.misc.createPrune as any).throws;
    const $pp0 = (input: any) =>
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem) $po1(elem);
        });
    const $po0 = (input: any): any => {
        if (Array.isArray(input.value)) $pp0(input.value);
        for (const key of Object.keys(input)) {
            if ("value" === key) continue;
            delete input[key];
        }
    };
    const $po1 = (input: any): any => {
        if (
            "object" === typeof input.manufacturer &&
            null !== input.manufacturer
        )
            $po2(input.manufacturer);
        if ("object" === typeof input.brand && null !== input.brand)
            $po3(input.brand);
        if ("object" === typeof input.similar && null !== input.similar)
            $pu0(input.similar);
        for (const key of Object.keys(input)) {
            if (
                "name" === key ||
                "manufacturer" === key ||
                "brand" === key ||
                "similar" === key
            )
                continue;
            delete input[key];
        }
    };
    const $po2 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("type" === key || "name" === key) continue;
            delete input[key];
        }
    };
    const $po3 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("type" === key || "name" === key) continue;
            delete input[key];
        }
    };
    const $pu0 = (input: any): any =>
        (() => {
            if ("brand" === input.type) return $po3(input);
            if ("manufacturer" === input.type) return $po2(input);
            $throws({
                expected:
                    "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                value: input,
            });
        })();
    if ("object" === typeof input && null !== input) $po0(input);
});
