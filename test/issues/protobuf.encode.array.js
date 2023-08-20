//-------------------------------------------------
// MESSAGE
//-------------------------------------------------
// syntax = "proto3";
// 
// message ArraySimpleProtobuf {
//     repeated bool boolean = 1;
//     repeated int32 int32 = 2;
//     repeated uint32 uint32 = 3;
//     repeated int64 int64 = 4;
//     repeated uint64 uint64 = 5;
//     repeated float float = 6;
//     repeated double double = 7;
//     repeated string string = 8;
//     repeated bytes bytes = 9;
//     repeated ArraySimpleProtobuf object = 10;
// }

//-------------------------------------------------
// TYPIA
//-------------------------------------------------
const encode = input => {
        const $Sizer = typia_1.default.protobuf
            .createEncode.Sizer;
        const $Writer = typia_1.default.protobuf
            .createEncode.Writer;
        const encoder = writer => {
            const $peo0 = input => {
                // property "boolean";
                if (0 !== input.boolean.length) {
                    writer.uint32(10);
                    writer.fork();
                    for (const elem of input.boolean) {
                        writer.bool(elem);
                    }
                    writer.ldelim();
                }
                // property "int32";
                if (0 !== input.int32.length) {
                    writer.uint32(18);
                    writer.fork();
                    for (const elem of input.int32) {
                        writer.int32(elem);
                    }
                    writer.ldelim();
                }
                // property "uint32";
                if (0 !== input.uint32.length) {
                    writer.uint32(26);
                    writer.fork();
                    for (const elem of input.uint32) {
                        writer.uint32(elem);
                    }
                    writer.ldelim();
                }
                // property "int64";
                if (0 !== input.int64.length) {
                    writer.uint32(34);
                    writer.fork();
                    for (const elem of input.int64) {
                        writer.int64(elem);
                    }
                    writer.ldelim();
                }
                // property "uint64";
                if (0 !== input.uint64.length) {
                    writer.uint32(42);
                    writer.fork();
                    for (const elem of input.uint64) {
                        writer.uint64(elem);
                    }
                    writer.ldelim();
                }
                // property "float";
                if (0 !== input.float.length) {
                    writer.uint32(50);
                    writer.fork();
                    for (const elem of input.float) {
                        writer.float(elem);
                    }
                    writer.ldelim();
                }
                // property "double";
                if (0 !== input.double.length) {
                    writer.uint32(58);
                    writer.fork();
                    for (const elem of input.double) {
                        writer.double(elem);
                    }
                    writer.ldelim();
                }
                // property "string";
                if (0 !== input.string.length) {
                    for (const elem of input.string) {
                        writer.uint32(66);
                        writer.string(elem);
                    }
                }
                // property "bytes";
                if (0 !== input.bytes.length) {
                    for (const elem of input.bytes) {
                        writer.uint32(74);
                        writer.bytes(elem);
                    }
                }
                // property "object";
                if (0 !== input.object.length) {
                    for (const elem of input.object) {
                        writer.uint32(82);
                        writer.fork();
                        $peo0(elem);
                        writer.ldelim();
                    }
                }
            };
            const $io0 = input => Array.isArray(input.boolean) && input.boolean.every(elem => "boolean" === typeof elem) && (Array.isArray(input.int32) && input.int32.every(elem => "number" === typeof elem && Math.floor(elem) === elem && (-2147483648 <= elem && elem <= 2147483647))) && (Array.isArray(input.uint32) && input.uint32.every(elem => "number" === typeof elem && Math.floor(elem) === elem && 0 <= elem && elem <= 4294967295)) && (Array.isArray(input.int64) && input.int64.every(elem => "bigint" === typeof elem)) && (Array.isArray(input.uint64) && input.uint64.every(elem => "bigint" === typeof elem && BigInt(0) <= elem)) && (Array.isArray(input.float) && input.float.every(elem => "number" === typeof elem && (-1.175494351e+38 <= elem && elem <= 3.4028235e+38))) && (Array.isArray(input.double) && input.double.every(elem => "number" === typeof elem)) && (Array.isArray(input.string) && input.string.every(elem => "string" === typeof elem)) && (Array.isArray(input.bytes) && input.bytes.every(elem => elem instanceof Uint8Array)) && (Array.isArray(input.object) && input.object.every(elem => "object" === typeof elem && null !== elem && $io0(elem)));
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    }

//-------------------------------------------------
// GOOGLE
//-------------------------------------------------
function ArraySimpleProtobuf$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.boolean!=null&&m.boolean.length){
  w.uint32(10).fork()
  for(var i=0;i<m.boolean.length;++i)
  w.bool(m.boolean[i])
  w.ldelim()
  }
  if(m.int32!=null&&m.int32.length){
  w.uint32(18).fork()
  for(var i=0;i<m.int32.length;++i)
  w.int32(m.int32[i])
  w.ldelim()
  }
  if(m.uint32!=null&&m.uint32.length){
  w.uint32(26).fork()
  for(var i=0;i<m.uint32.length;++i)
  w.uint32(m.uint32[i])
  w.ldelim()
  }
  if(m.int64!=null&&m.int64.length){
  w.uint32(34).fork()
  for(var i=0;i<m.int64.length;++i)
  w.int64(m.int64[i])
  w.ldelim()
  }
  if(m.uint64!=null&&m.uint64.length){
  w.uint32(42).fork()
  for(var i=0;i<m.uint64.length;++i)
  w.uint64(m.uint64[i])
  w.ldelim()
  }
  if(m.float!=null&&m.float.length){
  w.uint32(50).fork()
  for(var i=0;i<m.float.length;++i)
  w.float(m.float[i])
  w.ldelim()
  }
  if(m.double!=null&&m.double.length){
  w.uint32(58).fork()
  for(var i=0;i<m.double.length;++i)
  w.double(m.double[i])
  w.ldelim()
  }
  if(m.string!=null&&m.string.length){
  for(var i=0;i<m.string.length;++i)
  w.uint32(66).string(m.string[i])
  }
  if(m.bytes!=null&&m.bytes.length){
  for(var i=0;i<m.bytes.length;++i)
  w.uint32(74).bytes(m.bytes[i])
  }
  if(m.object!=null&&m.object.length){
  for(var i=0;i<m.object.length;++i)
  types[9].encode(m.object[i],w.uint32(82).fork()).ldelim()
  }
  return w
}