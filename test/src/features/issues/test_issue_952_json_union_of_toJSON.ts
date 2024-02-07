import typia, { Primitive } from "typia";

export const test_issue_952_json_union_of_toJSON = () => {
  validate({
    id: "A",
    date: new Date(),
  });
  validate({
    id: "B",
    date: new Date().toISOString(),
  });
  validate({
    id: "C",
    date: { linux: Date.now() },
  });
  validate({
    id: "D",
    date: {
      toJSON: () => ({
        iso: new Date().toISOString(),
      }),
    },
  });
  validate({
    id: "E",
    date: {
      toJSON: () => ({
        value: Date.now(),
      }),
    },
  });
};

const validate = (input: A | B | C | D | E) => {
  const json: string = typia.json.stringify(input);
  const parsed: Primitive<typeof input> = JSON.parse(json);
  typia.assert(parsed);
};

interface A {
  id: string;
  date: Date;
}
interface B {
  id: string;
  date: string;
}
interface C {
  id: string;
  date: { linux: number };
}
interface D {
  id: string;
  date: {
    toJSON(): { iso: string };
  };
}
interface E {
  id: string;
  date: {
    toJSON(): { value: number };
  };
}
