import typia from "typia";
export const test_pr_952_union_of_toJSON = () => {
  const x: X = { _: new Date(), x: new Date() };
  const y: Y = { _: new Date(), y: new Date() };
  ((input: X | Y): string => {
    const $io0 = (input: any): boolean =>
      input._ instanceof Date && input.x instanceof Date;
    const $io1 = (input: any): boolean =>
      input._ instanceof Date && input.y instanceof Date;
    const $string = (typia.json.stringify as any).string;
    const $throws = (typia.json.stringify as any).throws;
    const $so0 = (input: any): any =>
      `{"_":${$string(input._.toJSON())},"x":${$string(input.x.toJSON())}}`;
    const $so1 = (input: any): any =>
      `{"_":${$string(input._.toJSON())},"y":${$string(input.y.toJSON())}}`;
    const $su0 = (input: any): any =>
      (() => {
        if (undefined !== input.x) return $so0(input);
        else if (undefined !== input.y) return $so1(input);
        else
          $throws({
            expected: "(X | Y)",
            value: input,
          });
      })();
    return $su0(input);
  })(x);
  ((input: X | Y): string => {
    const $io0 = (input: any): boolean =>
      input._ instanceof Date && input.x instanceof Date;
    const $io1 = (input: any): boolean =>
      input._ instanceof Date && input.y instanceof Date;
    const $string = (typia.json.stringify as any).string;
    const $throws = (typia.json.stringify as any).throws;
    const $so0 = (input: any): any =>
      `{"_":${$string(input._.toJSON())},"x":${$string(input.x.toJSON())}}`;
    const $so1 = (input: any): any =>
      `{"_":${$string(input._.toJSON())},"y":${$string(input.y.toJSON())}}`;
    const $su0 = (input: any): any =>
      (() => {
        if (undefined !== input.x) return $so0(input);
        else if (undefined !== input.y) return $so1(input);
        else
          $throws({
            expected: "(X | Y)",
            value: input,
          });
      })();
    return $su0(input);
  })(y);
};
interface X {
  _: Date;
  x: Date;
}
interface Y {
  _: Date;
  y: Date;
}
