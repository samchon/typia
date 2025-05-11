import typia from "typia";

console.log(
  typia.is<boolean>(true),
  typia.assert<string>("something"),
  typia.json.stringify<number>(3),
  typia.protobuf.message<{
    value: number;
    binary: Uint8Array;
  }>(),
  typia.llm.schema<
    {
      /**
       * Primary Key.
       */
      id: string;
    },
    "gemini"
  >(),
  typia.llm.controller<{ say(): void }, "gemini">("default", {
    say: () => console.log("say"),
  }),
);
