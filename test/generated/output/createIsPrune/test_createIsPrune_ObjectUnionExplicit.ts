import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_createIsPrune_ObjectUnionExplicit = _test_isPrune(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input: any): input is ObjectUnionExplicit => {
        const is: any = (input: any): input is ObjectUnionExplicit => {
            const $io0: any = (input: any): boolean =>
                "number" === typeof input.x &&
                Number.isFinite(input.x) &&
                "number" === typeof input.y &&
                Number.isFinite(input.y) &&
                "point" === input.type;
            const $io1: any = (input: any): boolean =>
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
            const $io2: any = (input: any): boolean =>
                "number" === typeof input.x &&
                Number.isFinite(input.x) &&
                "number" === typeof input.y &&
                Number.isFinite(input.y);
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
                "object" === typeof input.p3 &&
                null !== input.p3 &&
                "number" === typeof input.p3.x &&
                Number.isFinite(input.p3.x) &&
                "number" === typeof input.p3.y &&
                Number.isFinite(input.p3.y) &&
                "triangle" === input.type;
            const $io4: any = (input: any): boolean =>
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
            const $io5: any = (input: any): boolean =>
                Array.isArray(input.points) &&
                input.points.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                ) &&
                "polyline" === input.type;
            const $io6: any = (input: any): boolean =>
                "object" === typeof input.outer &&
                null !== input.outer &&
                $io7(input.outer) &&
                Array.isArray(input.inner) &&
                input.inner.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io7(elem),
                ) &&
                "polygon" === input.type;
            const $io7: any = (input: any): boolean =>
                Array.isArray(input.points) &&
                input.points.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                );
            const $io8: any = (input: any): boolean =>
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
                    if ("point" === input.type) return $io0(input);
                    if ("line" === input.type) return $io1(input);
                    if ("triangle" === input.type) return $io3(input);
                    if ("rectangle" === input.type) return $io4(input);
                    if ("polyline" === input.type) return $io5(input);
                    if ("polygon" === input.type) return $io6(input);
                    if ("circle" === input.type) return $io8(input);
                    return false;
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $iu0(elem),
                )
            );
        };
        const prune: any = (input: ObjectUnionExplicit): void => {
            const $io0: any = (input: any): boolean =>
                "number" === typeof input.x &&
                "number" === typeof input.y &&
                "point" === input.type;
            const $io1: any = (input: any): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                $io2(input.p1) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                $io2(input.p2) &&
                "line" === input.type;
            const $io2: any = (input: any): boolean =>
                "number" === typeof input.x && "number" === typeof input.y;
            const $io3: any = (input: any): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                $io2(input.p1) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                $io2(input.p2) &&
                "object" === typeof input.p3 &&
                null !== input.p3 &&
                $io2(input.p3) &&
                "triangle" === input.type;
            const $io4: any = (input: any): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                $io2(input.p1) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                $io2(input.p2) &&
                "object" === typeof input.p3 &&
                null !== input.p3 &&
                $io2(input.p3) &&
                "object" === typeof input.p4 &&
                null !== input.p4 &&
                $io2(input.p4) &&
                "rectangle" === input.type;
            const $io5: any = (input: any): boolean =>
                Array.isArray(input.points) &&
                input.points.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                ) &&
                "polyline" === input.type;
            const $io6: any = (input: any): boolean =>
                "object" === typeof input.outer &&
                null !== input.outer &&
                $io7(input.outer) &&
                Array.isArray(input.inner) &&
                input.inner.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io7(elem),
                ) &&
                "polygon" === input.type;
            const $io7: any = (input: any): boolean =>
                Array.isArray(input.points) &&
                input.points.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                );
            const $io8: any = (input: any): boolean =>
                "object" === typeof input.centroid &&
                null !== input.centroid &&
                $io2(input.centroid) &&
                "number" === typeof input.radius &&
                "circle" === input.type;
            const $throws: any = (typia.createIsPrune as any).throws;
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("x" === key || "y" === key || "type" === key) continue;
                    delete input[key];
                }
            };
            const $po1: any = (input: any): any => {
                if ("object" === typeof input.p1 && null !== input.p1)
                    $po2(input.p1);
                if ("object" === typeof input.p2 && null !== input.p2)
                    $po2(input.p2);
                for (const key: any of Object.keys(input)) {
                    if ("p1" === key || "p2" === key || "type" === key)
                        continue;
                    delete input[key];
                }
            };
            const $po2: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("x" === key || "y" === key) continue;
                    delete input[key];
                }
            };
            const $po3: any = (input: any): any => {
                if ("object" === typeof input.p1 && null !== input.p1)
                    $po2(input.p1);
                if ("object" === typeof input.p2 && null !== input.p2)
                    $po2(input.p2);
                if ("object" === typeof input.p3 && null !== input.p3)
                    $po2(input.p3);
                for (const key: any of Object.keys(input)) {
                    if (
                        "p1" === key ||
                        "p2" === key ||
                        "p3" === key ||
                        "type" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po4: any = (input: any): any => {
                if ("object" === typeof input.p1 && null !== input.p1)
                    $po2(input.p1);
                if ("object" === typeof input.p2 && null !== input.p2)
                    $po2(input.p2);
                if ("object" === typeof input.p3 && null !== input.p3)
                    $po2(input.p3);
                if ("object" === typeof input.p4 && null !== input.p4)
                    $po2(input.p4);
                for (const key: any of Object.keys(input)) {
                    if (
                        "p1" === key ||
                        "p2" === key ||
                        "p3" === key ||
                        "p4" === key ||
                        "type" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po5: any = (input: any): any => {
                if (Array.isArray(input.points))
                    (() =>
                        input.points.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $po2(elem);
                        }))();
                for (const key: any of Object.keys(input)) {
                    if ("points" === key || "type" === key) continue;
                    delete input[key];
                }
            };
            const $po6: any = (input: any): any => {
                if ("object" === typeof input.outer && null !== input.outer)
                    $po7(input.outer);
                if (Array.isArray(input.inner))
                    (() =>
                        input.inner.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $po7(elem);
                        }))();
                for (const key: any of Object.keys(input)) {
                    if ("outer" === key || "inner" === key || "type" === key)
                        continue;
                    delete input[key];
                }
            };
            const $po7: any = (input: any): any => {
                if (Array.isArray(input.points))
                    (() =>
                        input.points.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $po2(elem);
                        }))();
                for (const key: any of Object.keys(input)) {
                    if ("points" === key) continue;
                    delete input[key];
                }
            };
            const $po8: any = (input: any): any => {
                if (
                    "object" === typeof input.centroid &&
                    null !== input.centroid
                )
                    $po2(input.centroid);
                for (const key: any of Object.keys(input)) {
                    if (
                        "centroid" === key ||
                        "radius" === key ||
                        "type" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input))
                (() =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $pu0(elem);
                    }))();
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    ObjectUnionExplicit.SPOILERS,
);
