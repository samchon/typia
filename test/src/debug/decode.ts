import typia, { tags } from "typia";

interface ISomething {
  // ATOMICS
  id:
    | (string & tags.Sequence<4>)
    | (number & tags.Type<"uint32"> & tags.Sequence<6>)
    | (number & tags.Type<"float"> & tags.Sequence<7>);
  name: string;
  age: number & tags.Type<"uint32"> & tags.Sequence<8>;
  flag: boolean;

  // ARRAYS
  numbers?: Array<number & tags.Type<"uint32">>;
  strings: Array<string>;
  objects: Array<INested>;

  // OBJECTS
  nested: INested;
  map: Map<string, INested>;
  dynamic: Record<string, INested>;
}
interface INested {
  title: string;
  body: string;
}

typia.protobuf.createDecode<ISomething>();

// console.log(typia.protobuf.message<ISomething>());
