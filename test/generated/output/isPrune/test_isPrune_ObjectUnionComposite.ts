import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_isPrune_ObjectUnionComposite = _test_isPrune(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) =>
        ((
            input: any,
        ): input is Array<
            | ObjectUnionComposite.IPoint
            | ObjectUnionComposite.ILine
            | ObjectUnionComposite.ITriangle
            | ObjectUnionComposite.IRectangle
            | ObjectUnionComposite.IPolyline
            | ObjectUnionComposite.IPolygon
            | ObjectUnionComposite.IPointedShape
            | ObjectUnionComposite.ICircle
        > => {
            const is = (
                input: any,
            ): input is Array<
                | ObjectUnionComposite.IPoint
                | ObjectUnionComposite.ILine
                | ObjectUnionComposite.ITriangle
                | ObjectUnionComposite.IRectangle
                | ObjectUnionComposite.IPolyline
                | ObjectUnionComposite.IPolygon
                | ObjectUnionComposite.IPointedShape
                | ObjectUnionComposite.ICircle
            > => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.x &&
                    Number.isFinite(input.x) &&
                    "number" === typeof input.y &&
                    Number.isFinite(input.y);
                const $io1 = (input: any): boolean =>
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
                    Number.isFinite(input.p2.y);
                const $io2 = (input: any): boolean =>
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
                    Number.isFinite(input.p3.y);
                const $io3 = (input: any): boolean =>
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
                    Number.isFinite(input.p4.y);
                const $io4 = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    );
                const $io5 = (input: any): boolean =>
                    "object" === typeof input.outer &&
                    null !== input.outer &&
                    $io4(input.outer) &&
                    Array.isArray(input.inner) &&
                    input.inner.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io4(elem),
                    );
                const $io6 = (input: any): boolean =>
                    Array.isArray(input.outer) &&
                    input.outer.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    ) &&
                    "object" === typeof input.inner &&
                    null !== input.inner &&
                    "number" === typeof input.inner.x &&
                    Number.isFinite(input.inner.x) &&
                    "number" === typeof input.inner.y &&
                    Number.isFinite(input.inner.y);
                const $io7 = (input: any): boolean =>
                    "object" === typeof input.centroid &&
                    null !== input.centroid &&
                    "number" === typeof input.centroid.x &&
                    Number.isFinite(input.centroid.x) &&
                    "number" === typeof input.centroid.y &&
                    Number.isFinite(input.centroid.y) &&
                    "number" === typeof input.radius &&
                    Number.isFinite(input.radius);
                const $iu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.x) return $io0(input);
                        if (undefined !== input.p4) return $io3(input);
                        if (undefined !== input.points) return $io4(input);
                        if (
                            "object" === typeof input.outer &&
                            null !== input.outer &&
                            $io4(input.outer)
                        )
                            return $io5(input);
                        if (
                            Array.isArray(input.outer) &&
                            input.outer.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io0(elem),
                            )
                        )
                            return $io6(input);
                        if (undefined !== input.centroid) return $io7(input);
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
            const prune = (
                input: Array<
                    | ObjectUnionComposite.IPoint
                    | ObjectUnionComposite.ILine
                    | ObjectUnionComposite.ITriangle
                    | ObjectUnionComposite.IRectangle
                    | ObjectUnionComposite.IPolyline
                    | ObjectUnionComposite.IPolygon
                    | ObjectUnionComposite.IPointedShape
                    | ObjectUnionComposite.ICircle
                >,
            ): void => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.x && "number" === typeof input.y;
                const $io1 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2);
                const $io2 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    $io0(input.p3);
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
                    $io0(input.p4);
                const $io4 = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    );
                const $io5 = (input: any): boolean =>
                    "object" === typeof input.outer &&
                    null !== input.outer &&
                    $io4(input.outer) &&
                    Array.isArray(input.inner) &&
                    input.inner.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io4(elem),
                    );
                const $io6 = (input: any): boolean =>
                    Array.isArray(input.outer) &&
                    input.outer.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    ) &&
                    "object" === typeof input.inner &&
                    null !== input.inner &&
                    $io0(input.inner);
                const $io7 = (input: any): boolean =>
                    "object" === typeof input.centroid &&
                    null !== input.centroid &&
                    $io0(input.centroid) &&
                    "number" === typeof input.radius;
                const $iu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.x) return $io0(input);
                        if (undefined !== input.p4) return $io3(input);
                        if (undefined !== input.points) return $io4(input);
                        if (
                            "object" === typeof input.outer &&
                            null !== input.outer &&
                            $io4(input.outer)
                        )
                            return $io5(input);
                        if (
                            Array.isArray(input.outer) &&
                            input.outer.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io0(elem),
                            )
                        )
                            return $io6(input);
                        if (undefined !== input.centroid) return $io7(input);
                        return (() => {
                            if (undefined !== input.p3) return $io2(input);
                            return $io1(input);
                        })();
                    })();
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("x" === key || "y" === key) continue;
                        delete input[key];
                    }
                };
                const $po1 = (input: any): any => {
                    if ("object" === typeof input.p1 && null !== input.p1)
                        $po0(input.p1);
                    if ("object" === typeof input.p2 && null !== input.p2)
                        $po0(input.p2);
                    for (const key of Object.keys(input)) {
                        if ("p1" === key || "p2" === key) continue;
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
                        if ("p1" === key || "p2" === key || "p3" === key)
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
                            "p4" === key
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
                        if ("points" === key) continue;
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
                        if ("outer" === key || "inner" === key) continue;
                        delete input[key];
                    }
                };
                const $po6 = (input: any): any => {
                    if (Array.isArray(input.outer))
                        input.outer.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $po0(elem);
                        });
                    if ("object" === typeof input.inner && null !== input.inner)
                        $po0(input.inner);
                    for (const key of Object.keys(input)) {
                        if ("outer" === key || "inner" === key) continue;
                        delete input[key];
                    }
                };
                const $po7 = (input: any): any => {
                    if (
                        "object" === typeof input.centroid &&
                        null !== input.centroid
                    )
                        $po0(input.centroid);
                    for (const key of Object.keys(input)) {
                        if ("centroid" === key || "radius" === key) continue;
                        delete input[key];
                    }
                };
                const $pu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.x) return $po0(input);
                        if (undefined !== input.p4) return $po3(input);
                        if (undefined !== input.points) return $po4(input);
                        if (
                            "object" === typeof input.outer &&
                            null !== input.outer &&
                            $io4(input.outer)
                        )
                            return $po5(input);
                        if (
                            Array.isArray(input.outer) &&
                            input.outer.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io0(elem),
                            )
                        )
                            return $po6(input);
                        if (undefined !== input.centroid) return $po7(input);
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
    ObjectUnionComposite.SPOILERS,
);
