import typia from "typia";

interface MyObj {
  private: boolean | null;
}

const encode = typia.protobuf.createEncode<MyObj>();
console.log(
  encode({
    private: true,
  }),
);
