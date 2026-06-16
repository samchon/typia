import typia from "typia";

interface Deep {
  kind: "deep";
  a: { b: { c: { value: string } } };
}

const input: unknown = {
  kind: "deep",
  a: { b: { c: { value: "hello" } } },
};

typia.shallow<Deep, 0>(input); // typeof input === "object" && input !== null
typia.shallow<Deep, 1>(input); // also checks `kind` and that `a` is an object
typia.shallow<Deep, 3>(input); // descends to `a.b.c`, stops before `value`
typia.is<Deep>(input); // full descent, including `a.b.c.value`
