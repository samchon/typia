//-------------------------------------------------
// TYPIA
//-------------------------------------------------
const encode = (input) => {
    const $Sizer = typia_1.default.protobuf.createEncode.Sizer;
    const $Writer = typia_1.default.protobuf.createEncode.Writer;
    const encoder = (writer) => {
        const $peo0 = (input) => {
            // property "boolean";
            writer.uint32(8);
            writer.fork();
            for (var elem of input.boolean) {
                writer.bool(elem);
            }
            writer.ldelim();
            // property "int32";
            writer.uint32(16);
            writer.fork();
            for (var elem of input.int32) {
                writer.int32(elem);
            }
            writer.ldelim();
            // property "uint32";
            writer.uint32(24);
            writer.fork();
            for (var elem of input.uint32) {
                writer.uint32(elem);
            }
            writer.ldelim();
            // property "int64";
            writer.uint32(32);
            writer.fork();
            for (var elem of input.int64) {
                writer.int64(elem);
            }
            writer.ldelim();
            // property "uint64";
            writer.uint32(40);
            writer.fork();
            for (var elem of input.uint64) {
                writer.uint64(elem);
            }
            writer.ldelim();
            // property "float";
            writer.uint32(53);
            writer.fork();
            for (var elem of input.float) {
                writer.float(elem);
            }
            writer.ldelim();
            // property "double";
            writer.uint32(57);
            writer.fork();
            for (var elem of input.double) {
                writer.double(elem);
            }
            writer.ldelim();
            // property "string";
            for (var elem of input.string) {
                writer.uint32(66);
                writer.string(elem);
            }
            // property "bytes";
            for (var elem of input.bytes) {
                writer.uint32(74);
                writer.bytes(elem);
            }
            // property "something";
            for (var elem of input.something) {
                writer.uint32(82);
                writer.fork();
                $peo0(elem);
                writer.ldelim();
            }
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
function ISomething$encode(m, w) {
    if (!w) w = Writer.create();
    if (m.boolean != null && m.boolean.length) {
        w.uint32(10).fork();
        for (var i = 0; i < m.boolean.length; ++i) w.bool(m.boolean[i]);
        w.ldelim();
    }
    if (m.int32 != null && m.int32.length) {
        w.uint32(18).fork();
        for (var i = 0; i < m.int32.length; ++i) w.int32(m.int32[i]);
        w.ldelim();
    }
    if (m.uint32 != null && m.uint32.length) {
        w.uint32(26).fork();
        for (var i = 0; i < m.uint32.length; ++i) w.uint32(m.uint32[i]);
        w.ldelim();
    }
    if (m.int64 != null && m.int64.length) {
        w.uint32(34).fork();
        for (var i = 0; i < m.int64.length; ++i) w.int64(m.int64[i]);
        w.ldelim();
    }
    if (m.uint64 != null && m.uint64.length) {
        w.uint32(42).fork();
        for (var i = 0; i < m.uint64.length; ++i) w.int64(m.uint64[i]);
        w.ldelim();
    }
    if (m.float != null && m.float.length) {
        w.uint32(50).fork();
        for (var i = 0; i < m.float.length; ++i) w.float(m.float[i]);
        w.ldelim();
    }
    if (m.double != null && m.double.length) {
        w.uint32(58).fork();
        for (var i = 0; i < m.double.length; ++i) w.double(m.double[i]);
        w.ldelim();
    }
    if (m.string != null && m.string.length) {
        for (var i = 0; i < m.string.length; ++i)
            w.uint32(66).string(m.string[i]);
    }
    if (m.bytes != null && m.bytes.length) {
        for (var i = 0; i < m.bytes.length; ++i) w.uint32(74).bytes(m.bytes[i]);
    }
    if (m.something != null && m.something.length) {
        for (var i = 0; i < m.something.length; ++i)
            types[9].encode(m.something[i], w.uint32(82).fork()).ldelim();
    }
    return w;
}
