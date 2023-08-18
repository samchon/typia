//-------------------------------------------------
// TYPIA
//-------------------------------------------------
// syntax = "proto3";
// 
// message TagDefault {
//     required bool boolean = 1;
//     required double number = 2;
//     required string string = 3;
//     required string text = 4;
//     required string template = 5;
//     oneof boolean_and_number_and_string {
//         bool v6 = 6;
//         double v7 = 7;
//         string v8 = 8;
//     }
//     oneof union_but_boolean {
//         bool v9 = 9;
//         double v10 = 10;
//         string v11 = 11;
//     }
//     oneof union_but_number {
//         bool v12 = 12;
//         double v13 = 13;
//         string v14 = 14;
//     }
//     oneof union_but_string {
//         bool v15 = 15;
//         double v16 = 16;
//         string v17 = 17;
//     }
//     required double vulnerable_range = 18;
//     required string vulnerable_template = 19;
//     oneof boolean_and_number_and_template {
//         bool v20 = 20;
//         double v21 = 21;
//         string v22 = 22;
//     }
// }
const encode = input => {
        const $throws = typia_1.default.protobuf
            .createEncode.throws;
        const $Sizer = typia_1.default.protobuf
            .createEncode.Sizer;
        const $Writer = typia_1.default.protobuf
            .createEncode.Writer;
        const encoder = writer => {
            const $peo0 = input => {
                // property "boolean";
                writer.uint32(8);
                writer.bool(input.boolean);
                // property "number";
                writer.uint32(17);
                writer.double(input.number);
                // property "string";
                writer.uint32(26);
                writer.string(input.string);
                // property "text";
                writer.uint32(34);
                writer.string(input.text);
                // property "template";
                writer.uint32(42);
                writer.string(input.template);
                // property "boolean_and_number_and_string";
                if ("boolean" === typeof input.boolean_and_number_and_string) {
                    writer.uint32(48);
                    writer.bool(input.boolean_and_number_and_string);
                }
                if ("number" === typeof input.boolean_and_number_and_string) {
                    writer.uint32(49);
                    writer.double(input.boolean_and_number_and_string);
                }
                if ("string" === typeof input.boolean_and_number_and_string) {
                    writer.uint32(50);
                    writer.string(input.boolean_and_number_and_string);
                }
                $throws({
                    expected: "(boolean | number | string)",
                    value: input.boolean_and_number_and_string
                });
                // property "union_but_boolean";
                if ("boolean" === typeof input.union_but_boolean) {
                    writer.uint32(72);
                    writer.bool(input.union_but_boolean);
                }
                if ("number" === typeof input.union_but_boolean) {
                    writer.uint32(73);
                    writer.double(input.union_but_boolean);
                }
                if ("string" === typeof input.union_but_boolean) {
                    writer.uint32(74);
                    writer.string(input.union_but_boolean);
                }
                $throws({
                    expected: "(boolean | number | string)",
                    value: input.union_but_boolean
                });
                // property "union_but_number";
                if ("boolean" === typeof input.union_but_number) {
                    writer.uint32(96);
                    writer.bool(input.union_but_number);
                }
                if ("number" === typeof input.union_but_number) {
                    writer.uint32(97);
                    writer.double(input.union_but_number);
                }
                if ("string" === typeof input.union_but_number) {
                    writer.uint32(98);
                    writer.string(input.union_but_number);
                }
                $throws({
                    expected: "(boolean | number | string)",
                    value: input.union_but_number
                });
                // property "union_but_string";
                if ("boolean" === typeof input.union_but_string) {
                    writer.uint32(120);
                    writer.bool(input.union_but_string);
                }
                if ("number" === typeof input.union_but_string) {
                    writer.uint32(121);
                    writer.double(input.union_but_string);
                }
                if ("string" === typeof input.union_but_string) {
                    writer.uint32(122);
                    writer.string(input.union_but_string);
                }
                $throws({
                    expected: "(boolean | number | string)",
                    value: input.union_but_string
                });
                // property "vulnerable_range";
                writer.uint32(145);
                writer.double(input.vulnerable_range);
                // property "vulnerable_template";
                writer.uint32(154);
                writer.string(input.vulnerable_template);
                // property "boolean_and_number_and_template";
                if ("boolean" === typeof input.boolean_and_number_and_template) {
                    writer.uint32(160);
                    writer.bool(input.boolean_and_number_and_template);
                }
                if ("number" === typeof input.boolean_and_number_and_template) {
                    writer.uint32(161);
                    writer.double(input.boolean_and_number_and_template);
                }
                if ("string" === typeof input.boolean_and_number_and_template) {
                    writer.uint32(162);
                    writer.string(input.boolean_and_number_and_template);
                }
                $throws({
                    expected: "(`prefix_${string}` | boolean | number)",
                    value: input.boolean_and_number_and_template
                });
            };
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
function TagDefault$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(8).bool(m.boolean)
  w.uint32(17).double(m.number)
  w.uint32(26).string(m.string)
  w.uint32(34).string(m.text)
  w.uint32(42).string(m.template)
  if(m.v6!=null&&Object.hasOwnProperty.call(m,"v6"))
  w.uint32(48).bool(m.v6)
  if(m.v7!=null&&Object.hasOwnProperty.call(m,"v7"))
  w.uint32(57).double(m.v7)
  if(m.v8!=null&&Object.hasOwnProperty.call(m,"v8"))
  w.uint32(66).string(m.v8)
  if(m.v9!=null&&Object.hasOwnProperty.call(m,"v9"))
  w.uint32(72).bool(m.v9)
  if(m.v10!=null&&Object.hasOwnProperty.call(m,"v10"))
  w.uint32(81).double(m.v10)
  if(m.v11!=null&&Object.hasOwnProperty.call(m,"v11"))
  w.uint32(90).string(m.v11)
  if(m.v12!=null&&Object.hasOwnProperty.call(m,"v12"))
  w.uint32(96).bool(m.v12)
  if(m.v13!=null&&Object.hasOwnProperty.call(m,"v13"))
  w.uint32(105).double(m.v13)
  if(m.v14!=null&&Object.hasOwnProperty.call(m,"v14"))
  w.uint32(114).string(m.v14)
  if(m.v15!=null&&Object.hasOwnProperty.call(m,"v15"))
  w.uint32(120).bool(m.v15)
  if(m.v16!=null&&Object.hasOwnProperty.call(m,"v16"))
  w.uint32(129).double(m.v16)
  if(m.v17!=null&&Object.hasOwnProperty.call(m,"v17"))
  w.uint32(138).string(m.v17)
  w.uint32(145).double(m.vulnerable_range)
  w.uint32(154).string(m.vulnerable_template)
  if(m.v20!=null&&Object.hasOwnProperty.call(m,"v20"))
  w.uint32(160).bool(m.v20)
  if(m.v21!=null&&Object.hasOwnProperty.call(m,"v21"))
  w.uint32(169).double(m.v21)
  if(m.v22!=null&&Object.hasOwnProperty.call(m,"v22"))
  w.uint32(178).string(m.v22)
  return w
}