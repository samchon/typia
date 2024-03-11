import typia from "typia";

interface ISomething {
  data: Array<1 | 2 | 3>;
}
console.log(typia.protobuf.message<ISomething>());
