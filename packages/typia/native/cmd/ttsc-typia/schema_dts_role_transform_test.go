package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestSchemaDtsRoleTransform checks the authored operation results described below.
//
// Role/SchemaValue intersections and generic array/primitive alternatives remain structural schema data; repeated generic use cannot prevent their validator emission.
//
// 1. Repeated RoleBase intersections combine primitive, Role and array branches; the assertion owns transformation/member preservation rather than runtime values.
// 2. The schema-dts-style fixture transforms and emits the @type member plus both requested validator exports.
//
// @evidence contracts/testing.md#behavioral-verification The schema-dts-style fixture transforms and emits the @type member plus both requested validator exports.
// @evidence contracts/testing.md#independent-expectations Role/SchemaValue intersections and generic array/primitive alternatives remain structural schema data; repeated generic use cannot prevent their validator emission.
// @evidence contracts/testing.md#distinguishing-cases Repeated RoleBase intersections combine primitive, Role and array branches; the assertion owns transformation/member preservation rather than runtime values.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestSchemaDtsRoleTransform as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestSchemaDtsRoleTransform(t *testing.T) {
  project := schemaDtsRoleProject(t)
  js := schemaDtsRoleTransform(t, project)
  for _, needle := range []string{`"@type"`, "validateRecipe", "validateRoleNameSet"} {
    if strings.Contains(js, needle) == false {
      t.Fatalf("schema-dts role fixture did not emit %q:\n%s", needle, js)
    }
  }
}

func schemaDtsRoleProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "schema-dts-role-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(schemaDtsRoleTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(schemaDtsRoleSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func schemaDtsRoleTransform(t *testing.T, project string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("schema-dts role transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

const schemaDtsRoleTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const schemaDtsRoleSource = `import typia from "typia";

type Text = string;
type SchemaURL = string;
type DateTime = string;

type SchemaValue<T, TProperty extends string> =
  | T
  | Role<T, TProperty>
  | readonly (T | Role<T, TProperty>)[];

interface ThingBase {
  "@id"?: SchemaValue<SchemaURL, "@id">;
  name?: SchemaValue<Text, "name">;
  alternateName?: SchemaValue<Text, "alternateName">;
}

interface RoleBase extends ThingBase {
  endDate?: SchemaValue<Date | DateTime, "endDate">;
  namedPosition?: SchemaValue<Text | SchemaURL, "namedPosition">;
  roleName?: SchemaValue<Text | SchemaURL, "roleName">;
  startDate?: SchemaValue<Date | DateTime, "startDate">;
}

type RoleLeaf<TContent, TProperty extends string> =
  RoleBase &
  {
    "@type": "Role";
  } &
  {
    [key in TProperty]: TContent;
  };

type LinkRole<TContent, TProperty extends string> =
  RoleBase &
  {
    "@type": "LinkRole";
    url?: SchemaValue<SchemaURL, "url">;
  } &
  {
    [key in TProperty]: TContent;
  };

type OrganizationRole<TContent, TProperty extends string> =
  RoleBase &
  {
    "@type": "OrganizationRole";
    memberOf?: SchemaValue<Organization, "memberOf">;
  } &
  {
    [key in TProperty]: TContent;
  };

type PerformanceRole<TContent, TProperty extends string> =
  RoleBase &
  {
    "@type": "PerformanceRole";
    performanceIn?: SchemaValue<Event, "performanceIn">;
  } &
  {
    [key in TProperty]: TContent;
  };

type Role<TContent = never, TProperty extends string = never> =
  | RoleLeaf<TContent, TProperty>
  | LinkRole<TContent, TProperty>
  | OrganizationRole<TContent, TProperty>
  | PerformanceRole<TContent, TProperty>;

interface Recipe extends ThingBase {
  "@type": "Recipe";
  author?: SchemaValue<Person | Organization, "author">;
  image?: SchemaValue<SchemaURL, "image">;
  recipeIngredient?: SchemaValue<Text, "recipeIngredient">;
  recipeInstructions?: SchemaValue<HowToStep | Text, "recipeInstructions">;
  mainEntityOfPage?: SchemaValue<Article, "mainEntityOfPage">;
  publisher?: SchemaValue<Organization, "publisher">;
  aggregateRating?: SchemaValue<Rating, "aggregateRating">;
  video?: SchemaValue<VideoObject, "video">;
  keywords?: SchemaValue<Text, "keywords">;
}

interface Person extends ThingBase {
  "@type": "Person";
  email?: SchemaValue<Text, "email">;
  affiliation?: SchemaValue<Organization, "affiliation">;
}

interface Organization extends ThingBase {
  "@type": "Organization";
  url?: SchemaValue<SchemaURL, "url">;
  member?: SchemaValue<Person, "member">;
}

interface HowToStep extends ThingBase {
  "@type": "HowToStep";
  text?: SchemaValue<Text, "text">;
}

interface Article extends ThingBase {
  "@type": "Article";
  headline?: SchemaValue<Text, "headline">;
  author?: SchemaValue<Person | Organization, "author">;
}

interface Rating extends ThingBase {
  "@type": "Rating";
  ratingValue?: SchemaValue<number | Text, "ratingValue">;
  bestRating?: SchemaValue<number | Text, "bestRating">;
}

interface VideoObject extends ThingBase {
  "@type": "VideoObject";
  contentUrl?: SchemaValue<SchemaURL, "contentUrl">;
  thumbnailUrl?: SchemaValue<SchemaURL, "thumbnailUrl">;
}

interface Event extends ThingBase {
  "@type": "Event";
  startDate?: SchemaValue<Date | DateTime, "startDate">;
  organizer?: SchemaValue<Person | Organization, "organizer">;
}

type Timestamp = Date;
type RoleNameSet = Set<Text>;
type ScoreMap = Map<Text, number>;

export const validateRecipe = typia.createValidate<Recipe>();
export const validateTimestamp = typia.createValidate<Timestamp>();
export const validateRoleNameSet = typia.createValidate<RoleNameSet>();
export const validateScoreMap = typia.createValidate<ScoreMap>();
`
