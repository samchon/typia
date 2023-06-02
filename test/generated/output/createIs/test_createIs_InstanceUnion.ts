import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { InstanceUnion } from "../../../structures/InstanceUnion";

export const test_createIs_InstanceUnion = _test_is(
    "InstanceUnion",
    InstanceUnion.generate,
    (input: any): input is InstanceUnion => {
        const $io0: any = (input: any): boolean =>
            "object" === typeof input.scale &&
            null !== input.scale &&
            "number" === typeof input.scale.x &&
            Number.isFinite(input.scale.x) &&
            "number" === typeof input.scale.y &&
            Number.isFinite(input.scale.y) &&
            "number" === typeof input.scale.z &&
            Number.isFinite(input.scale.z) &&
            "object" === typeof input.position &&
            null !== input.position &&
            "number" === typeof input.position.x &&
            Number.isFinite(input.position.x) &&
            "number" === typeof input.position.y &&
            Number.isFinite(input.position.y) &&
            "number" === typeof input.position.z &&
            Number.isFinite(input.position.z) &&
            "object" === typeof input.rotate &&
            null !== input.rotate &&
            "number" === typeof input.rotate.x &&
            Number.isFinite(input.rotate.x) &&
            "number" === typeof input.rotate.y &&
            Number.isFinite(input.rotate.y) &&
            "number" === typeof input.rotate.z &&
            Number.isFinite(input.rotate.z) &&
            "object" === typeof input.pivot &&
            null !== input.pivot &&
            "number" === typeof input.pivot.x &&
            Number.isFinite(input.pivot.x) &&
            "number" === typeof input.pivot.y &&
            Number.isFinite(input.pivot.y) &&
            "number" === typeof input.pivot.z &&
            Number.isFinite(input.pivot.z);
        const $io2: any = (input: any): boolean =>
            "number" === typeof input.x &&
            Number.isFinite(input.x) &&
            "number" === typeof input.y &&
            Number.isFinite(input.y) &&
            "point" === input.type;
        const $io3: any = (input: any): boolean =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof input.p1.x &&
            Number.isFinite(input.p1.x) &&
            "number" === typeof input.p1.y &&
            Number.isFinite(input.p1.y) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof input.p2.x &&
            Number.isFinite(input.p2.x) &&
            "number" === typeof input.p2.y &&
            Number.isFinite(input.p2.y) &&
            "line" === input.type;
        const $io4: any = (input: any): boolean =>
            "number" === typeof input.x &&
            Number.isFinite(input.x) &&
            "number" === typeof input.y &&
            Number.isFinite(input.y);
        const $io5: any = (input: any): boolean =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof input.p1.x &&
            Number.isFinite(input.p1.x) &&
            "number" === typeof input.p1.y &&
            Number.isFinite(input.p1.y) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof input.p2.x &&
            Number.isFinite(input.p2.x) &&
            "number" === typeof input.p2.y &&
            Number.isFinite(input.p2.y) &&
            "object" === typeof input.p3 &&
            null !== input.p3 &&
            "number" === typeof input.p3.x &&
            Number.isFinite(input.p3.x) &&
            "number" === typeof input.p3.y &&
            Number.isFinite(input.p3.y) &&
            "triangle" === input.type;
        const $io6: any = (input: any): boolean =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof input.p1.x &&
            Number.isFinite(input.p1.x) &&
            "number" === typeof input.p1.y &&
            Number.isFinite(input.p1.y) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof input.p2.x &&
            Number.isFinite(input.p2.x) &&
            "number" === typeof input.p2.y &&
            Number.isFinite(input.p2.y) &&
            "object" === typeof input.p3 &&
            null !== input.p3 &&
            "number" === typeof input.p3.x &&
            Number.isFinite(input.p3.x) &&
            "number" === typeof input.p3.y &&
            Number.isFinite(input.p3.y) &&
            "object" === typeof input.p4 &&
            null !== input.p4 &&
            "number" === typeof input.p4.x &&
            Number.isFinite(input.p4.x) &&
            "number" === typeof input.p4.y &&
            Number.isFinite(input.p4.y) &&
            "rectangle" === input.type;
        const $io7: any = (input: any): boolean =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io4(elem),
            ) &&
            "polyline" === input.type;
        const $io8: any = (input: any): boolean =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io9(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io9(elem),
            ) &&
            "polygon" === input.type;
        const $io9: any = (input: any): boolean =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io4(elem),
            );
        const $io10: any = (input: any): boolean =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            "number" === typeof input.centroid.x &&
            Number.isFinite(input.centroid.x) &&
            "number" === typeof input.centroid.y &&
            Number.isFinite(input.centroid.y) &&
            "number" === typeof input.radius &&
            Number.isFinite(input.radius) &&
            "circle" === input.type;
        const $iu0: any = (input: any): any =>
            (() => {
                if ("point" === input.type) return $io2(input);
                if ("line" === input.type) return $io3(input);
                if ("triangle" === input.type) return $io5(input);
                if ("rectangle" === input.type) return $io6(input);
                if ("polyline" === input.type) return $io7(input);
                if ("polygon" === input.type) return $io8(input);
                if ("circle" === input.type) return $io10(input);
                return false;
            })();
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any) =>
                    null !== elem &&
                    undefined !== elem &&
                    (("number" === typeof elem && Number.isFinite(elem)) ||
                        elem instanceof Uint8Array ||
                        (elem instanceof Set &&
                            (() =>
                                [...elem].every(
                                    (elem: any) => "boolean" === typeof elem,
                                ))()) ||
                        elem instanceof Map ||
                        (Array.isArray(elem) &&
                            (() => {
                                const array: any = elem;
                                const tuplePredicators: any = [
                                    [
                                        (top: any[]): any =>
                                            top.length === 2 &&
                                            "string" === typeof top[0] &&
                                            "string" === typeof top[1],
                                        (entire: any[]): any =>
                                            entire.length === 2 &&
                                            "string" === typeof entire[0] &&
                                            "string" === typeof entire[1],
                                    ],
                                    [
                                        (top: any[]): any =>
                                            top.length === 3 &&
                                            "boolean" === typeof top[0] &&
                                            "number" === typeof top[1] &&
                                            Number.isFinite(top[1]) &&
                                            "number" === typeof top[2] &&
                                            Number.isFinite(top[2]),
                                        (entire: any[]): any =>
                                            entire.length === 3 &&
                                            "boolean" === typeof entire[0] &&
                                            "number" === typeof entire[1] &&
                                            Number.isFinite(entire[1]) &&
                                            "number" === typeof entire[2] &&
                                            Number.isFinite(entire[2]),
                                    ],
                                    [
                                        (top: any[]): any => top.length === 0,
                                        (entire: any[]): any =>
                                            entire.length === 0,
                                    ],
                                ];
                                for (const pred of tuplePredicators)
                                    if (pred[0](array)) return pred[1](array);
                                const top: any = array[0];
                                if (0 === elem.length) return true;
                                const arrayPredicators: any = [
                                    [
                                        (top: any): any =>
                                            "object" === typeof top &&
                                            null !== top &&
                                            $iu0(top),
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any) =>
                                                    "object" === typeof elem &&
                                                    null !== elem &&
                                                    $iu0(elem),
                                            ),
                                    ],
                                    [
                                        (top: any): any =>
                                            "boolean" === typeof top,
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any) =>
                                                    "boolean" === typeof elem,
                                            ),
                                    ],
                                    [
                                        (top: any): any =>
                                            "number" === typeof top &&
                                            Number.isFinite(top),
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any) =>
                                                    "number" === typeof elem &&
                                                    Number.isFinite(elem),
                                            ),
                                    ],
                                ];
                                const passed: any = arrayPredicators.filter(
                                    (pred: any) => pred[0](top),
                                );
                                if (1 === passed.length)
                                    return passed[0][1](array);
                                else if (1 < passed.length)
                                    for (const pred of passed)
                                        if (
                                            array.every(
                                                (value: any) =>
                                                    true === pred[0](value),
                                            )
                                        )
                                            return pred[1](array);
                                return false;
                            })()) ||
                        ("object" === typeof elem &&
                            null !== elem &&
                            $io0(elem))),
            )
        );
    },
);
