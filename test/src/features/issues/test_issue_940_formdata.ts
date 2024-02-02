import typia from "typia";

export const test_issue_940_formdata = () => {
  const x = typia.json.application<[Blob]>();
  const y = typia.json.application<[File]>();

  typia.assert<Expected>(x.schemas[0]);
  typia.assert<Expected>(y.schemas[0]);
};
type Expected = {
  type: "string";
  format: "binary";
};
