import typia from "typia";

interface Something {
  id: string;
}
const something: Something = { id: "1234" };
const encoded = typia.protobuf.encode<Something>(something);
const decoded = typia.protobuf.decode<Something>(encoded);
console.log(decoded);
