import typia from "../../../../src";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectUnionImplicit = _test_isPrune(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) =>
        ((input: any): input is ObjectUnionImplicit => {
            const is = (input: any): input is ObjectUnionImplicit => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.x &&
                    Number.isFinite(input.x) &&
                    "number" === typeof input.y &&
                    Number.isFinite(input.y) &&
                    (null === input.slope ||
                        undefined === input.slope ||
                        ("number" === typeof input.slope &&
                            Number.isFinite(input.slope)));
                const $io1 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2) &&
                    (null === input.width ||
                        undefined === input.width ||
                        ("number" === typeof input.width &&
                            Number.isFinite(input.width))) &&
                    (null === input.distance ||
                        undefined === input.distance ||
                        ("number" === typeof input.distance &&
                            Number.isFinite(input.distance)));
                const $io2 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    $io0(input.p3) &&
                    (null === input.width ||
                        undefined === input.width ||
                        ("number" === typeof input.width &&
                            Number.isFinite(input.width))) &&
                    (null === input.height ||
                        undefined === input.height ||
                        ("number" === typeof input.height &&
                            Number.isFinite(input.height))) &&
                    (null === input.area ||
                        undefined === input.area ||
                        ("number" === typeof input.area &&
                            Number.isFinite(input.area)));
                const $io3 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    $io0(input.p3) &&
                    "object" === typeof input.p4 &&
                    null !== input.p4 &&
                    $io0(input.p4) &&
                    (null === input.width ||
                        undefined === input.width ||
                        ("number" === typeof input.width &&
                            Number.isFinite(input.width))) &&
                    (null === input.height ||
                        undefined === input.height ||
                        ("number" === typeof input.height &&
                            Number.isFinite(input.height))) &&
                    (null === input.area ||
                        undefined === input.area ||
                        ("number" === typeof input.area &&
                            Number.isFinite(input.area)));
                const $io4 = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    ) &&
                    (null === input.length ||
                        undefined === input.length ||
                        ("number" === typeof input.length &&
                            Number.isFinite(input.length)));
                const $io5 = (input: any): boolean =>
                    "object" === typeof input.outer &&
                    null !== input.outer &&
                    $io4(input.outer) &&
                    (undefined === input.inner ||
                        (Array.isArray(input.inner) &&
                            input.inner.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io4(elem),
                            ))) &&
                    (null === input.area ||
                        undefined === input.area ||
                        ("number" === typeof input.area &&
                            Number.isFinite(input.area)));
                const $io6 = (input: any): boolean =>
                    (undefined === input.centroid ||
                        ("object" === typeof input.centroid &&
                            null !== input.centroid &&
                            $io0(input.centroid))) &&
                    "number" === typeof input.radius &&
                    Number.isFinite(input.radius) &&
                    (null === input.area ||
                        undefined === input.area ||
                        ("number" === typeof input.area &&
                            Number.isFinite(input.area)));
                const $iu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.x) return $io0(input);
                        if (undefined !== input.p4) return $io3(input);
                        if (undefined !== input.points) return $io4(input);
                        if (undefined !== input.outer) return $io5(input);
                        if (undefined !== input.radius) return $io6(input);
                        return (() => {
                            if (undefined !== input.p3) return $io2(input);
                            return $io1(input);
                        })();
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    )
                );
            };
            const prune = (input: ObjectUnionImplicit): void => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.x &&
                    "number" === typeof input.y &&
                    (null === input.slope ||
                        undefined === input.slope ||
                        "number" === typeof input.slope);
                const $io1 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2) &&
                    (null === input.width ||
                        undefined === input.width ||
                        "number" === typeof input.width) &&
                    (null === input.distance ||
                        undefined === input.distance ||
                        "number" === typeof input.distance);
                const $io2 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    $io0(input.p3) &&
                    (null === input.width ||
                        undefined === input.width ||
                        "number" === typeof input.width) &&
                    (null === input.height ||
                        undefined === input.height ||
                        "number" === typeof input.height) &&
                    (null === input.area ||
                        undefined === input.area ||
                        "number" === typeof input.area);
                const $io3 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    $io0(input.p3) &&
                    "object" === typeof input.p4 &&
                    null !== input.p4 &&
                    $io0(input.p4) &&
                    (null === input.width ||
                        undefined === input.width ||
                        "number" === typeof input.width) &&
                    (null === input.height ||
                        undefined === input.height ||
                        "number" === typeof input.height) &&
                    (null === input.area ||
                        undefined === input.area ||
                        "number" === typeof input.area);
                const $io4 = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    ) &&
                    (null === input.length ||
                        undefined === input.length ||
                        "number" === typeof input.length);
                const $io5 = (input: any): boolean =>
                    "object" === typeof input.outer &&
                    null !== input.outer &&
                    $io4(input.outer) &&
                    (undefined === input.inner ||
                        (Array.isArray(input.inner) &&
                            input.inner.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io4(elem),
                            ))) &&
                    (null === input.area ||
                        undefined === input.area ||
                        "number" === typeof input.area);
                const $io6 = (input: any): boolean =>
                    (undefined === input.centroid ||
                        ("object" === typeof input.centroid &&
                            null !== input.centroid &&
                            $io0(input.centroid))) &&
                    "number" === typeof input.radius &&
                    (null === input.area ||
                        undefined === input.area ||
                        "number" === typeof input.area);
                const $iu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.x) return $io0(input);
                        if (undefined !== input.p4) return $io3(input);
                        if (undefined !== input.points) return $io4(input);
                        if (undefined !== input.outer) return $io5(input);
                        if (undefined !== input.radius) return $io6(input);
                        return (() => {
                            if (undefined !== input.p3) return $io2(input);
                            return $io1(input);
                        })();
                    })();
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("x" === key || "y" === key || "slope" === key)
                            continue;
                        delete input[key];
                    }
                };
                const $po1 = (input: any): any => {
                    if ("object" === typeof input.p1 && null !== input.p1)
                        $po0(input.p1);
                    if ("object" === typeof input.p2 && null !== input.p2)
                        $po0(input.p2);
                    for (const key of Object.keys(input)) {
                        if (
                            "p1" === key ||
                            "p2" === key ||
                            "width" === key ||
                            "distance" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $po2 = (input: any): any => {
                    if ("object" === typeof input.p1 && null !== input.p1)
                        $po0(input.p1);
                    if ("object" === typeof input.p2 && null !== input.p2)
                        $po0(input.p2);
                    if ("object" === typeof input.p3 && null !== input.p3)
                        $po0(input.p3);
                    for (const key of Object.keys(input)) {
                        if (
                            "p1" === key ||
                            "p2" === key ||
                            "p3" === key ||
                            "width" === key ||
                            "height" === key ||
                            "area" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $po3 = (input: any): any => {
                    if ("object" === typeof input.p1 && null !== input.p1)
                        $po0(input.p1);
                    if ("object" === typeof input.p2 && null !== input.p2)
                        $po0(input.p2);
                    if ("object" === typeof input.p3 && null !== input.p3)
                        $po0(input.p3);
                    if ("object" === typeof input.p4 && null !== input.p4)
                        $po0(input.p4);
                    for (const key of Object.keys(input)) {
                        if (
                            "p1" === key ||
                            "p2" === key ||
                            "p3" === key ||
                            "p4" === key ||
                            "width" === key ||
                            "height" === key ||
                            "area" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $po4 = (input: any): any => {
                    if (Array.isArray(input.points))
                        input.points.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $po0(elem);
                        });
                    for (const key of Object.keys(input)) {
                        if ("points" === key || "length" === key) continue;
                        delete input[key];
                    }
                };
                const $po5 = (input: any): any => {
                    if ("object" === typeof input.outer && null !== input.outer)
                        $po4(input.outer);
                    if (Array.isArray(input.inner))
                        input.inner.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $po4(elem);
                        });
                    for (const key of Object.keys(input)) {
                        if (
                            "outer" === key ||
                            "inner" === key ||
                            "area" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $po6 = (input: any): any => {
                    if (
                        "object" === typeof input.centroid &&
                        null !== input.centroid
                    )
                        $po0(input.centroid);
                    for (const key of Object.keys(input)) {
                        if (
                            "centroid" === key ||
                            "radius" === key ||
                            "area" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $pu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.x) return $po0(input);
                        if (undefined !== input.p4) return $po3(input);
                        if (undefined !== input.points) return $po4(input);
                        if (undefined !== input.outer) return $po5(input);
                        if (undefined !== input.radius) return $po6(input);
                        return (() => {
                            if (undefined !== input.p3) return $po2(input);
                            return $po1(input);
                        })();
                    })();
                if (Array.isArray(input))
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $pu0(elem);
                    });
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    ObjectUnionImplicit.SPOILERS,
);
