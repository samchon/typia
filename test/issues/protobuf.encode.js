const encode = input => {
    const $Sizer = typia_1.default.protobuf.createEncode.Sizer;
    const $Writer = typia_1.default.protobuf.createEncode.Writer;
    const encoder = writer => {
        const $peo0 = input => {
            // property "value";
            if (0 !== input.value.length) {
                for (const elem of input.value) {
                    writer.uint32(10);
                    writer.fork();
                    $peo1(elem);
                    writer.ldelim();
                }
            }
        };
        const $peo1 = input => {
            // property "value";
            if (undefined !== input.value.x)
                return (() => {
                    writer.uint32(10);
                    writer.fork();
                    $peo2(input.value);
                    writer.ldelim();
                })();
            else if (undefined !== input.value.p4)
                return (() => {
                    writer.uint32(10);
                    writer.fork();
                    $peo5(input.value);
                    writer.ldelim();
                })();
            else if (undefined !== input.value.points)
                return (() => {
                    writer.uint32(10);
                    writer.fork();
                    $peo6(input.value);
                    writer.ldelim();
                })();
            else if (Array.isArray(input.value.outer) && input.value.outer.every(elem => "object" === typeof elem && null !== elem && $io2(elem)))
                return (() => {
                    writer.uint32(10);
                    writer.fork();
                    $peo8(input.value);
                    writer.ldelim();
                })();
            else if ("object" === typeof input.value.outer && null !== input.value.outer && $io6(input.value.outer))
                return (() => {
                    writer.uint32(10);
                    writer.fork();
                    $peo7(input.value);
                    writer.ldelim();
                })();
            else if (undefined !== input.value.centroid)
                return (() => {
                    writer.uint32(10);
                    writer.fork();
                    $peo9(input.value);
                    writer.ldelim();
                })();
            else
                return (() => {
                    if (undefined !== input.value.p3)
                        return (() => {
                            writer.uint32(10);
                            writer.fork();
                            $peo4(input.value);
                            writer.ldelim();
                        })();
                    else
                        return (() => {
                            writer.uint32(10);
                            writer.fork();
                            $peo3(input.value);
                            writer.ldelim();
                        })();
                })();
        };
        const $peo2 = input => {
            // property "x";
            writer.uint32(9);
            writer.double(input.x);
            // property "y";
            writer.uint32(17);
            writer.double(input.y);
        };
        const $peo3 = input => {
            // property "p1";
            writer.uint32(10);
            writer.fork();
            $peo2(input.p1);
            writer.ldelim();
            // property "p2";
            writer.uint32(18);
            writer.fork();
            $peo2(input.p2);
            writer.ldelim();
        };
        const $peo4 = input => {
            // property "p1";
            writer.uint32(10);
            writer.fork();
            $peo2(input.p1);
            writer.ldelim();
            // property "p2";
            writer.uint32(18);
            writer.fork();
            $peo2(input.p2);
            writer.ldelim();
            // property "p3";
            writer.uint32(26);
            writer.fork();
            $peo2(input.p3);
            writer.ldelim();
        };
        const $peo5 = input => {
            // property "p1";
            writer.uint32(10);
            writer.fork();
            $peo2(input.p1);
            writer.ldelim();
            // property "p2";
            writer.uint32(18);
            writer.fork();
            $peo2(input.p2);
            writer.ldelim();
            // property "p3";
            writer.uint32(26);
            writer.fork();
            $peo2(input.p3);
            writer.ldelim();
            // property "p4";
            writer.uint32(34);
            writer.fork();
            $peo2(input.p4);
            writer.ldelim();
        };
        const $peo6 = input => {
            // property "points";
            if (0 !== input.points.length) {
                for (const elem of input.points) {
                    writer.uint32(10);
                    writer.fork();
                    $peo2(elem);
                    writer.ldelim();
                }
            }
        };
        const $peo7 = input => {
            // property "outer";
            writer.uint32(10);
            writer.fork();
            $peo6(input.outer);
            writer.ldelim();
            // property "inner";
            if (0 !== input.inner.length) {
                for (const elem of input.inner) {
                    writer.uint32(18);
                    writer.fork();
                    $peo6(elem);
                    writer.ldelim();
                }
            }
        };
        const $peo8 = input => {
            // property "outer";
            if (0 !== input.outer.length) {
                for (const elem of input.outer) {
                    writer.uint32(10);
                    writer.fork();
                    $peo2(elem);
                    writer.ldelim();
                }
            }
            // property "inner";
            writer.uint32(18);
            writer.fork();
            $peo2(input.inner);
            writer.ldelim();
        };
        const $peo9 = input => {
            // property "centroid";
            writer.uint32(10);
            writer.fork();
            $peo2(input.centroid);
            writer.ldelim();
            // property "radius";
            writer.uint32(17);
            writer.double(input.radius);
        };
        const $io1 = input => "object" === typeof input.value && null !== input.value && $iu0(input.value);
        const $io2 = input => "number" === typeof input.x && "number" === typeof input.y;
        const $io3 = input => "object" === typeof input.p1 && null !== input.p1 && $io2(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io2(input.p2));
        const $io4 = input => "object" === typeof input.p1 && null !== input.p1 && $io2(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io2(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io2(input.p3));
        const $io5 = input => "object" === typeof input.p1 && null !== input.p1 && $io2(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io2(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io2(input.p3)) && ("object" === typeof input.p4 && null !== input.p4 && $io2(input.p4));
        const $io6 = input => Array.isArray(input.points) && input.points.every(elem => "object" === typeof elem && null !== elem && $io2(elem));
        const $io7 = input => "object" === typeof input.outer && null !== input.outer && $io6(input.outer) && (Array.isArray(input.inner) && input.inner.every(elem => "object" === typeof elem && null !== elem && $io6(elem)));
        const $io8 = input => Array.isArray(input.outer) && input.outer.every(elem => "object" === typeof elem && null !== elem && $io2(elem)) && ("object" === typeof input.inner && null !== input.inner && $io2(input.inner));
        const $io9 = input => "object" === typeof input.centroid && null !== input.centroid && $io2(input.centroid) && "number" === typeof input.radius;
        const $iu0 = input => (() => {
            if (undefined !== input.x)
                return $io2(input);
            else if (undefined !== input.p4)
                return $io5(input);
            else if (undefined !== input.points)
                return $io6(input);
            else if (Array.isArray(input.outer) && input.outer.every(elem => "object" === typeof elem && null !== elem && $io2(elem)))
                return $io8(input);
            else if ("object" === typeof input.outer && null !== input.outer && $io6(input.outer))
                return $io7(input);
            else if (undefined !== input.centroid)
                return $io9(input);
            else
                return (() => {
                    if (undefined !== input.p3)
                        return $io4(input);
                    else
                        return $io3(input);
                })();
        })();
        $peo0(input);
        return writer;
    };
    const sizer = encoder(new $Sizer());
    const writer = encoder(new $Writer(sizer));
    return writer.buffer();
}