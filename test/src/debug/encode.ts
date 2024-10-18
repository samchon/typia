import typia, { tags } from "typia";

interface ISomething {
  id:
    | (string & tags.Sequence<4>)
    | (number & tags.Type<"uint32"> & tags.Sequence<6>)
    | (number & tags.Type<"float"> & tags.Sequence<7>);
  name: string;
  age: number & tags.Type<"uint32"> & tags.Sequence<8>;
}
typia.protobuf.createEncode<ISomething>();
