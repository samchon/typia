import typia from "typia";

import { ArraySimpleProtobuf } from "../structures/ArraySimpleProtobuf";

const data: ArraySimpleProtobuf = ArraySimpleProtobuf.generate();
console.log(data);

const encoded = typia.protobuf.assertEncode(ArraySimpleProtobuf.generate());
const decoded = typia.protobuf.assertDecode<ArraySimpleProtobuf>(encoded);

// (input) => {
//     const $throws = typia_1.default.protobuf.createEncode.throws;
//     const $Sizer = typia_1.default.protobuf.createEncode.Sizer;
//     const $Writer = typia_1.default.protobuf.createEncode.Writer;
//     const encoder = (writer) => {
//         const $peo0 = (input) => {
//             // property "value";
//             if (
//                 "number" === typeof input.value &&
//                 Math.floor(input.value) === input.value &&
//                 -9223372036854776000 <= input.value &&
//                 input.value <= 9223372036854776000
//             ) {
//                 writer.uint32(8);
//                 writer.int64(input.value);
//             } else if (
//                 "number" === typeof input.value &&
//                 -1.175494351e38 <= input.value &&
//                 input.value <= 3.4028235e38
//             ) {
//                 writer.uint32(21);
//                 writer.float(input.value);
//             } else
//                 $throws({
//                     expected: '(number | Type<"int64"> | Type<"float">)',
//                     value: input.value,
//                 });
//         };
//         //Something;
//         $peo0(input);
//         return writer;
//     };
//     const sizer = encoder(new $Sizer());
//     const writer = encoder(new $Writer(sizer));
//     return writer.buffer();
// };
