import typia, { tags } from "typia";

// Draws every tagged leaf through `typia.random<T>()` and requires the value to
// satisfy `typia.is<T>()` — the two sides of the same declaration, so a
// disagreement is a defect in one of them.
const DRAWS = 200;

const check = <T>(
  name: string,
  random: () => T,
  is: (input: unknown) => boolean,
): void => {
  let thrown: string | null = null;
  let rejected: unknown = undefined;
  let count = 0;
  for (let i = 0; i < DRAWS; ++i) {
    let value: T;
    try {
      value = random();
    } catch (error) {
      thrown = error instanceof Error ? error.message : String(error);
      break;
    }
    ++count;
    if (is(value) === false) {
      rejected = value;
      break;
    }
  }
  if (thrown !== null) console.log(`THROW ${name}: ${thrown}`);
  else if (rejected !== undefined)
    console.log(`FAIL  ${name}: ${JSON.stringify(rejected)}`);
  else console.log(`OK    ${name} (${count} draws)`);
};

type TimeMin = string & tags.Format<"time"> & tags.MinLength<20>;
type TimeMax = string & tags.Format<"time"> & tags.MaxLength<12>;
type DurationRange = string &
  tags.Format<"duration"> &
  tags.MinLength<4> &
  tags.MaxLength<9>;
type Ipv6Range = string &
  tags.Format<"ipv6"> &
  tags.MinLength<10> &
  tags.MaxLength<20>;
type EmailRange = string &
  tags.Format<"email"> &
  tags.MinLength<12> &
  tags.MaxLength<24>;
type UrlRange = string & tags.Format<"url"> & tags.MinLength<20>;
type UriTemplateRange = string &
  tags.Format<"uri-template"> &
  tags.MaxLength<40>;
type IdnHostname = string & tags.Format<"idn-hostname"> & tags.MinLength<8>;
type PatternShort = string & tags.Pattern<"^[a-z]+$"> & tags.MaxLength<3>;
type PatternLong = string & tags.Pattern<"^[0-9]{2}-[0-9]{2}$">;
type UniqueSmall = Array<number & tags.Type<"uint32"> & tags.Maximum<3>> &
  tags.UniqueItems &
  tags.MinItems<2>;
type UniqueStrings = Array<string & tags.Format<"uuid">> &
  tags.UniqueItems &
  tags.MinItems<3> &
  tags.MaxItems<5>;
type Int64 = number & tags.Type<"int64">;
type BigUint = bigint & tags.Type<"uint64"> & tags.Minimum<10n>;
type Multiple = number & tags.MultipleOf<0.01> & tags.Minimum<1>;
type MultipleInt = number &
  tags.Type<"int32"> &
  tags.MultipleOf<7> &
  tags.Minimum<10> &
  tags.Maximum<100>;
type ExclusiveRange = number &
  tags.ExclusiveMinimum<0> &
  tags.ExclusiveMaximum<1>;

check<TimeMin>("time & MinLength<20>", typia.createRandom<TimeMin>(), typia.createIs<TimeMin>());
check<TimeMax>("time & MaxLength<12>", typia.createRandom<TimeMax>(), typia.createIs<TimeMax>());
check<DurationRange>("duration & 4..9", typia.createRandom<DurationRange>(), typia.createIs<DurationRange>());
check<Ipv6Range>("ipv6 & 10..20", typia.createRandom<Ipv6Range>(), typia.createIs<Ipv6Range>());
check<EmailRange>("email & 12..24", typia.createRandom<EmailRange>(), typia.createIs<EmailRange>());
check<UrlRange>("url & MinLength<20>", typia.createRandom<UrlRange>(), typia.createIs<UrlRange>());
check<UriTemplateRange>("uri-template & MaxLength<40>", typia.createRandom<UriTemplateRange>(), typia.createIs<UriTemplateRange>());
check<IdnHostname>("idn-hostname & MinLength<8>", typia.createRandom<IdnHostname>(), typia.createIs<IdnHostname>());
check<PatternShort>("pattern & MaxLength<3>", typia.createRandom<PatternShort>(), typia.createIs<PatternShort>());
check<PatternLong>("pattern digits", typia.createRandom<PatternLong>(), typia.createIs<PatternLong>());
check<UniqueSmall>("uniqueItems narrow domain", typia.createRandom<UniqueSmall>(), typia.createIs<UniqueSmall>());
check<UniqueStrings>("uniqueItems uuid 3..5", typia.createRandom<UniqueStrings>(), typia.createIs<UniqueStrings>());
check<Int64>("int64", typia.createRandom<Int64>(), typia.createIs<Int64>());
check<BigUint>("bigint uint64 & Minimum<10n>", typia.createRandom<BigUint>(), typia.createIs<BigUint>());
check<Multiple>("multipleOf 0.01", typia.createRandom<Multiple>(), typia.createIs<Multiple>());
check<MultipleInt>("int32 multipleOf 7 in 10..100", typia.createRandom<MultipleInt>(), typia.createIs<MultipleInt>());
check<ExclusiveRange>("exclusive 0..1", typia.createRandom<ExclusiveRange>(), typia.createIs<ExclusiveRange>());
