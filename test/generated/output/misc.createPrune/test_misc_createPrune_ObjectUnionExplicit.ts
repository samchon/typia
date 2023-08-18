import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_misc_prune_ObjectUnionExplicit =
    _test_misc_prune<ObjectUnionExplicit>(ObjectUnionExplicit)(
        (input: ObjectUnionExplicit): void => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.x &&
                "number" === typeof input.y &&
                "point" === input.type;
            const $io1 = (input: any): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                $io2(input.p1) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                $io2(input.p2) &&
                "line" === input.type;
            const $io2 = (input: any): boolean =>
                "number" === typeof input.x && "number" === typeof input.y;
            const $io3 = (input: any): boolean =>
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
            const $io4 = (input: any): boolean =>
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
            const $io5 = (input: any): boolean =>
                Array.isArray(input.points) &&
                input.points.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                ) &&
                "polyline" === input.type;
            const $io6 = (input: any): boolean =>
                "object" === typeof input.outer &&
                null !== input.outer &&
                $io7(input.outer) &&
                Array.isArray(input.inner) &&
                input.inner.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io7(elem),
                ) &&
                "polygon" === input.type;
            const $io7 = (input: any): boolean =>
                Array.isArray(input.points) &&
                input.points.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                );
            const $io8 = (input: any): boolean =>
                "object" === typeof input.centroid &&
                null !== input.centroid &&
                $io2(input.centroid) &&
                "number" === typeof input.radius &&
                "circle" === input.type;
            const $throws = (typia.misc.createPrune as any).throws;
            const $pp0 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $pu0(elem);
                });
            const $pp1 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po2(elem);
                });
            const $pp2 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po7(elem);
                });
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("x" === key || "y" === key || "type" === key) continue;
                    delete input[key];
                }
            };
            const $po1 = (input: any): any => {
                if ("object" === typeof input.p1 && null !== input.p1)
                    $po2(input.p1);
                if ("object" === typeof input.p2 && null !== input.p2)
                    $po2(input.p2);
                for (const key of Object.keys(input)) {
                    if ("p1" === key || "p2" === key || "type" === key)
                        continue;
                    delete input[key];
                }
            };
            const $po2 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("x" === key || "y" === key) continue;
                    delete input[key];
                }
            };
            const $po3 = (input: any): any => {
                if ("object" === typeof input.p1 && null !== input.p1)
                    $po2(input.p1);
                if ("object" === typeof input.p2 && null !== input.p2)
                    $po2(input.p2);
                if ("object" === typeof input.p3 && null !== input.p3)
                    $po2(input.p3);
                for (const key of Object.keys(input)) {
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
            const $po4 = (input: any): any => {
                if ("object" === typeof input.p1 && null !== input.p1)
                    $po2(input.p1);
                if ("object" === typeof input.p2 && null !== input.p2)
                    $po2(input.p2);
                if ("object" === typeof input.p3 && null !== input.p3)
                    $po2(input.p3);
                if ("object" === typeof input.p4 && null !== input.p4)
                    $po2(input.p4);
                for (const key of Object.keys(input)) {
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
            const $po5 = (input: any): any => {
                if (Array.isArray(input.points)) $pp1(input.points);
                for (const key of Object.keys(input)) {
                    if ("points" === key || "type" === key) continue;
                    delete input[key];
                }
            };
            const $po6 = (input: any): any => {
                if ("object" === typeof input.outer && null !== input.outer)
                    $po7(input.outer);
                if (Array.isArray(input.inner)) $pp2(input.inner);
                for (const key of Object.keys(input)) {
                    if ("outer" === key || "inner" === key || "type" === key)
                        continue;
                    delete input[key];
                }
            };
            const $po7 = (input: any): any => {
                if (Array.isArray(input.points)) $pp1(input.points);
                for (const key of Object.keys(input)) {
                    if ("points" === key) continue;
                    delete input[key];
                }
            };
            const $po8 = (input: any): any => {
                if (
                    "object" === typeof input.centroid &&
                    null !== input.centroid
                )
                    $po2(input.centroid);
                for (const key of Object.keys(input)) {
                    if (
                        "centroid" === key ||
                        "radius" === key ||
                        "type" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $pu0 = (input: any): any =>
                (() => {
                    if ("point" === input.type) return $po0(input);
                    else if ("line" === input.type) return $po1(input);
                    else if ("triangle" === input.type) return $po3(input);
                    else if ("rectangle" === input.type) return $po4(input);
                    else if ("polyline" === input.type) return $po5(input);
                    else if ("polygon" === input.type) return $po6(input);
                    else if ("circle" === input.type) return $po8(input);
                    else
                        $throws({
                            expected:
                                '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                            value: input,
                        });
                })();
            if (Array.isArray(input)) $pp0(input);
        },
    );
