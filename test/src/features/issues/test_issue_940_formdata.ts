import typia from "typia";

export const test_issue_940_formdata = () => {
  const x = typia.json.schemas<[Blob]>();
  const y = typia.json.schemas<[File]>();

  typia.assert<Expected>(x.schemas[0]);
  typia.assert<Expected>(y.schemas[0]);
};
type Expected = {
  type: "string";
  format: "binary";
};
