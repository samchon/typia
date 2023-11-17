import typia from "typia";

interface IPointer<T> {
  value: T;
}

// MESSAGE
typia.protobuf.message<IPointer<number> | IPointer<string>>();
typia.protobuf.message<
  IPointer<IPointer<number>> | IPointer<IPointer<boolean>>
>();
