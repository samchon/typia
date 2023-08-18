//-------------------------------------------------
// TYPIA
//-------------------------------------------------
const encode = (input) => {
    const $Sizer = typia_1.default.protobuf.createEncode.Sizer;
    const $Writer = typia_1.default.protobuf.createEncode.Writer;
    const encoder = (writer) => {
        const $peo0 = (input) => {
            // property "scalars";
            if (0 !== input.scalars.length) {
                writer.uint32(10);
                writer.fork();
                for (const elem of input.scalars) {
                    writer.double(elem);
                }
                writer.ldelim();
            }
            // property "additionals";
            if (undefined != input.additionals && null != input.additionals) {
                if (0 !== input.additionals.length) {
                    for (const elem of input.additionals) {
                        writer.uint32(18);
                        writer.fork();
                        $peo1(elem);
                        writer.ldelim();
                    }
                }
            }
            // property "title";
            writer.uint32(26);
            writer.string(input.title);
            // property "description";
            if (null != input.description) {
                writer.uint32(34);
                writer.string(input.description);
            }
            // property "position";
            if (null != input.position) {
                writer.uint32(42);
                writer.fork();
                $peo1(input.position);
                writer.ldelim();
            }
            // property "size";
            if (undefined != input.size && null != input.size) {
                writer.uint32(50);
                writer.fork();
                $peo1(input.size);
                writer.ldelim();
            }
        };
        const $peo1 = (input) => {
            // property "x";
            writer.uint32(8);
            writer.int64(input.x);
            // property "y";
            writer.uint32(16);
            writer.int64(input.y);
            // property "z";
            writer.uint32(24);
            writer.int64(input.z);
        };
        $peo0(input);
        return writer;
    };
    const sizer = encoder(new $Sizer());
    const writer = encoder(new $Writer(sizer));
    return writer.buffer();
};

//-------------------------------------------------
// GOOGLE
//-------------------------------------------------
function IBox3D$encode(m, w) {
    if (!w) w = Writer.create();
    if (m.scalars != null && m.scalars.length) {
        w.uint32(10).fork();
        for (var i = 0; i < m.scalars.length; ++i) w.double(m.scalars[i]);
        w.ldelim();
    }
    if (m.additionals != null && m.additionals.length) {
        for (var i = 0; i < m.additionals.length; ++i)
            types[1].encode(m.additionals[i], w.uint32(18).fork()).ldelim();
    }
    w.uint32(26).string(m.title);
    if (m.description != null && Object.hasOwnProperty.call(m, "description"))
        w.uint32(34).string(m.description);
    if (m.position != null && Object.hasOwnProperty.call(m, "position"))
        types[4].encode(m.position, w.uint32(42).fork()).ldelim();
    if (m.size != null && Object.hasOwnProperty.call(m, "size"))
        types[5].encode(m.size, w.uint32(50).fork()).ldelim();
    return w;
}
function IPoint3D$encode(m, w) {
    if (!w) w = Writer.create();
    w.uint32(8).int64(m.x);
    w.uint32(16).int64(m.y);
    w.uint32(24).int64(m.z);
    return w;
}
