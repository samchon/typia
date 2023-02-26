import typia from "../../../../src";
import { ObjectNullable } from "../../../structures/ObjectNullable";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ObjectNullable = _test_prune(
    "ObjectNullable",
    ObjectNullable.generate,
    (input: ObjectNullable): void => {
        const $throws = (typia.createPrune as any).throws;
        const $io0 = (input: any): boolean =>
            "string" === typeof input.name &&
            "object" === typeof input.manufacturer &&
            null !== input.manufacturer &&
            $io1(input.manufacturer) &&
            (null === input.brand ||
                ("object" === typeof input.brand &&
                    null !== input.brand &&
                    $io2(input.brand))) &&
            (null === input.similar ||
                ("object" === typeof input.similar &&
                    null !== input.similar &&
                    $iu0(input.similar)));
        const $io1 = (input: any): boolean =>
            "manufacturer" === input.type && "string" === typeof input.name;
        const $io2 = (input: any): boolean =>
            "brand" === input.type && "string" === typeof input.name;
        const $iu0 = (input: any): any =>
            (() => {
                if ("manufacturer" === input.type) return $io1(input);
                if ("brand" === input.type) return $io2(input);
                return false;
            })();
        const $po0 = (input: any): any => {
            if (
                "object" === typeof input.manufacturer &&
                null !== input.manufacturer
            )
                $po1(input.manufacturer);
            if ("object" === typeof input.brand && null !== input.brand)
                $po2(input.brand);
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
        const $po1 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if ("type" === key || "name" === key) continue;
                delete input[key];
            }
        };
        const $po2 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if ("type" === key || "name" === key) continue;
                delete input[key];
            }
        };
        const $pu0 = (input: any): any =>
            (() => {
                if ("manufacturer" === input.type) return $po1(input);
                if ("brand" === input.type) return $po2(input);
                $throws({
                    expected:
                        "(ObjectNullable.IManufacturer | ObjectNullable.IBrand)",
                    value: input,
                });
            })();
        if (
            Array.isArray(input) &&
            input.length === 3 &&
            "object" === typeof input[0] &&
            null !== input[0] &&
            $io0(input[0]) &&
            "object" === typeof input[1] &&
            null !== input[1] &&
            $io0(input[1]) &&
            "object" === typeof input[2] &&
            null !== input[2] &&
            $io0(input[2])
        ) {
            if ("object" === typeof input[0] && null !== input[0])
                $po0(input[0]);
            if ("object" === typeof input[1] && null !== input[1])
                $po0(input[1]);
            if ("object" === typeof input[2] && null !== input[2])
                $po0(input[2]);
        }
    },
);
