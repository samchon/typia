import typia from "typia";

// interface ISomething {
//   id: string;
//   age: number;
// }
//
// export const objects = typia.compare.equals<ISomething>(
//   { id: "1", age: 2 },
//   { id: "1", age: 2 },
// );
//
export const matrix = (() => {
  return (a: number[][][], b: number[][][]): boolean => {
    return (
      a === b ||
      (a.length === b.length &&
        a.every((item: any, index: any) => {
          return (
            item === (b as any)[index]! ||
            (item.length === (b as any)[index]!.length &&
              item.every((item: any, index: any) => {
                return (
                  item === ((b as any)[index]! as any)[index]! ||
                  (item.length === ((b as any)[index]! as any)[index]!.length &&
                    item.every((item: any, index: any) => {
                      return (
                        item ===
                        (((b as any)[index]! as any)[index]! as any)[index]!
                      );
                    }))
                );
              }))
          );
        }))
    );
  };
})()([[[1, 2, 3]]], [[[1, 2, 3]]]);
