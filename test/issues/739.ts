import typia from "typia";

export interface SampleInterface {
  exParams: {
    dataId?: string;
    dataType?: number;
  };
}

const value: string = typia.json.stringify<SampleInterface>({
  exParams: {
    dataId: "123456",
    dataType: 2,
  },
});
console.log(value);
