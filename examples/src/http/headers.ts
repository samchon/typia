import typia from "typia";

interface IHeaders {
  "x-Category": "x" | "y" | "z";
  "x-MEMO"?: string;
  "x-nAmE"?: string;
  "x-Values": number[];
  "x-FlAgS": boolean[];
  "X-Descriptions": string[];
}
typia.http.createHeaders<IHeaders>();
