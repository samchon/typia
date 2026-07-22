import typia, { tags } from "typia";
import { _isFormatTime } from "typia/lib/internal/_isFormatTime";
import { _isFormatDateTime } from "typia/lib/internal/_isFormatDateTime";

interface ICommentTime {
  /** @format time */
  value: string;
}
interface ICommentDateTime {
  /** @format date-time */
  value: string;
}

const taggedTime = typia.createIs<{ value: string & tags.Format<"time"> }>();
const commentTime = typia.createIs<ICommentTime>();
const taggedDateTime = typia.createIs<{
  value: string & tags.Format<"date-time">;
}>();
const commentDateTime = typia.createIs<ICommentDateTime>();

// RFC 3339 full-time oracle (JSON-Schema-Test-Suite optional/format/time.json)
const TIME: [string, boolean][] = [
  ["23:59:60Z", true],
  ["23:59:60+00:00", true],
  ["15:59:60-08:00", true],
  ["01:29:60+01:30", true],
  ["23:29:60+23:30", true],
  ["22:59:60Z", false],
  ["23:58:60Z", false],
  ["23:59:60+01:00", false],
  ["23:59:59Z", true],
  ["00:00:00.1234567890Z", true],
  ["00:00:00.123Z", true],
];

const DATETIME: [string, boolean][] = [
  ["2024-12-31T23:59:60Z", true],
  ["2024-06-30T15:59:60-08:00", true],
  ["2024-01-01T00:00:00.1234567890Z", true],
];

console.log("format=time");
for (const [value, expected] of TIME) {
  const direct: boolean = _isFormatTime(value);
  const tagged: boolean = taggedTime({ value });
  const comment: boolean = commentTime({ value });
  console.log(
    [
      direct === expected && tagged === expected && comment === expected
        ? "OK  "
        : "FAIL",
      JSON.stringify(value).padEnd(24),
      `expected=${expected}`,
      `direct=${direct}`,
      `tagged=${tagged}`,
      `comment=${comment}`,
    ].join(" "),
  );
}

console.log("\nformat=date-time");
for (const [value, expected] of DATETIME) {
  const direct: boolean = _isFormatDateTime(value);
  const tagged: boolean = taggedDateTime({ value });
  const comment: boolean = commentDateTime({ value });
  console.log(
    [
      direct === expected && tagged === expected && comment === expected
        ? "OK  "
        : "FAIL",
      JSON.stringify(value).padEnd(34),
      `expected=${expected}`,
      `direct=${direct}`,
      `tagged=${tagged}`,
      `comment=${comment}`,
    ].join(" "),
  );
}
