import { Writer } from "protobufjs";

import { $ProtobufSizer } from "typia/lib/functional/$ProtobufSizer";
import { $ProtobufWriter } from "typia/lib/functional/$ProtobufWriter";

const typiaWriter = new $ProtobufWriter(new $ProtobufSizer(8));
typiaWriter.double(1.0);

const writer = new Writer();
writer.double(1.0);

console.log({
  tyipa: Buffer.from(typiaWriter.buffer()),
  google: Buffer.from(writer.finish()),
});
