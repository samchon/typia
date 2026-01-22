import typia, { tags } from "typia";
import { v4 } from "uuid";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_1062_uniqueItems = () => {
  TestValidator.equals("implicit")([true, true, true, false])([
    typia.is<string[] & tags.UniqueItems>([]),
    typia.is<string[] & tags.UniqueItems>(["one"]),
    typia.is<string[] & tags.UniqueItems>(["one", "two", "three"]),
    typia.is<string[] & tags.UniqueItems>(["one", "two", "one"]),
  ]);
  TestValidator.equals("explicit true")([true, true, true, false])([
    typia.is<string[] & tags.UniqueItems<true>>([]),
    typia.is<string[] & tags.UniqueItems<true>>(["one"]),
    typia.is<string[] & tags.UniqueItems<true>>(["one", "two", "three"]),
    typia.is<string[] & tags.UniqueItems<true>>(["one", "two", "one"]),
  ]);
  TestValidator.equals("explicit false")([true, true, true, true])([
    typia.is<string[] & tags.UniqueItems<false>>([]),
    typia.is<string[] & tags.UniqueItems<false>>(["one"]),
    typia.is<string[] & tags.UniqueItems<false>>(["one", "two", "three"]),
    typia.is<string[] & tags.UniqueItems<false>>(["one", "two", "one"]),
  ]);
  TestValidator.equals("objects")([true, true, false])([
    typia.is<IMember[] & tags.UniqueItems<true>>([
      { email: "a@a.com", name: "a", age: 1 },
      { email: "b@b.com", name: "b", age: 2 },
    ]),
    typia.is<IMember[] & tags.UniqueItems<true>>([
      { email: "a@a.com", name: "a", age: 1 },
      { email: "b@b.com", name: "b", age: 2 },
      { email: "b@b.com", name: "b", age: 3 },
    ]),
    typia.is<IMember[] & tags.UniqueItems<true>>([
      { email: "a@a.com", name: "a", age: 1 },
      { email: "b@b.com", name: "b", age: 2 },
      { email: "b@b.com", name: "b", age: 2 },
    ]),
  ]);
  TestValidator.equals("arrays")([true, true, false])([
    typia.is<number[][] & tags.UniqueItems<true>>([
      [1, 2],
      [3, 4],
    ]),
    typia.is<number[][] & tags.UniqueItems<true>>([
      [1, 2],
      [3, 4],
      [5, 6],
    ]),
    typia.is<number[][] & tags.UniqueItems<true>>([
      [1, 2],
      [3, 4],
      [1, 2],
    ]),
  ]);
  TestValidator.equals("dates")([true, false])([
    typia.is<Date[] & tags.UniqueItems<true>>([
      new Date(0),
      new Date(1),
      new Date(2),
    ]),
    typia.is<Date[] & tags.UniqueItems<true>>([
      new Date(0),
      new Date(1),
      new Date(1),
    ]),
  ]);
  TestValidator.equals("sets")([true, true, false])([
    typia.is<Set<number>[] & tags.UniqueItems<true>>([
      new Set([1, 2, 3]),
      new Set([4, 5, 6]),
      new Set([7, 8, 9]),
    ]),
    typia.is<Set<number>[] & tags.UniqueItems<true>>([
      new Set([1, 2, 3, 4]),
      new Set([1, 2, 3, 5]),
      new Set([1, 2, 3, 6]),
    ]),
    typia.is<Set<number>[] & tags.UniqueItems<true>>([
      new Set([1, 2, 3]),
      new Set([4, 5, 6]),
      new Set([1, 2, 3]),
    ]),
  ]);
  TestValidator.equals("maps")([true, true, false])([
    typia.is<Map<string, number>[] & tags.UniqueItems<true>>([
      new Map([
        ["a", 1],
        ["b", 2],
      ]),
      new Map([
        ["c", 3],
        ["d", 4],
      ]),
      new Map([
        ["e", 5],
        ["f", 6],
      ]),
    ]),
    typia.is<Map<string, number>[] & tags.UniqueItems<true>>([
      new Map([
        ["a", 1],
        ["b", 2],
      ]),
      new Map([
        ["c", 3],
        ["d", 4],
      ]),
      new Map([
        ["e", 5],
        ["f", 6],
      ]),
    ]),
    typia.is<Map<string, number>[] & tags.UniqueItems<true>>([
      new Map([
        ["a", 1],
        ["b", 2],
      ]),
      new Map([
        ["c", 3],
        ["d", 4],
      ]),
      new Map([
        ["a", 1],
        ["b", 2],
      ]),
    ]),
  ]);
  TestValidator.equals("deep")([true, true, false])([
    typia.is<IDepartment[] & tags.UniqueItems<true>>([
      typia.random<IDepartment>(),
      typia.random<IDepartment>(),
      typia.random<IDepartment>(),
    ]),
    typia.is<IDepartment[] & tags.UniqueItems<true>>(
      (() => {
        const first = typia.random<IDepartment>();
        first.children = new Array(3)
          .fill(0)
          .map(() => typia.random<IDepartment>());
        return [
          first,
          {
            ...first,
            children: [
              ...first.children.slice(0, 2),
              {
                ...first.children[2]!,
                id: v4(),
              },
            ],
          },
        ];
      })(),
    ),
    typia.is<IDepartment[] & tags.UniqueItems<true>>(
      (() => {
        const first = typia.random<IDepartment>();
        const second = typia.random<IDepartment>();
        const third = typia.misc.clone(first);
        return [first, second, third];
      })(),
    ),
  ]);
};

interface IMember {
  email: string;
  name: string;
  age: number;
}

interface IDepartment {
  id: string;
  members: Map<string, IMember>;
  children: IDepartment[];
  logo: Uint8Array;
  created_at: Date;
}
