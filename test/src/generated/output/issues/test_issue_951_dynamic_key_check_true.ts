import typia from "typia";
export const test_issue_951_dynamic_key_check_true = () => {
  (input: any): input is MyInterface => {
    const $io0 = (input: any): boolean =>
      "string" === typeof input.name &&
      "object" === typeof input.volumes &&
      null !== input.volumes &&
      false === Array.isArray(input.volumes) &&
      $io1(input.volumes);
    const $io1 = (input: any): boolean =>
      (undefined === input.system ||
        ("number" === typeof input.system && Number.isFinite(input.system))) &&
      (undefined === input.messages ||
        ("object" === typeof input.messages &&
          null !== input.messages &&
          false === Array.isArray(input.messages) &&
          $io2(input.messages)));
    const $io2 = (input: any): boolean =>
      Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value) return true;
        return "number" === typeof value && Number.isFinite(value);
      });
    return "object" === typeof input && null !== input && $io0(input);
  };
};
interface MyInterface {
  name: string;
  volumes: {
    system?: number;
    messages?: {
      [messageId: string]: number;
    };
  };
}
