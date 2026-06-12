package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestSchemaDtsRoleTransform verifies the schema-dts Role/SchemaValue shape.
//
// Issue #1710 reported that `schema.Recipe` repeatedly expands the same
// RoleBase intersection through many `SchemaValue<T, K>` fields. This fixture
// keeps that generic union-of-intersections graph local to the repository and
// executes the emitted validators against primitive, Role, and array branches.
func TestSchemaDtsRoleTransform(t *testing.T) {
  project := schemaDtsRoleProject(t)
  js := schemaDtsRoleTransform(t, project)
  for _, needle := range []string{`"@type"`, "validateRecipe", "validateRoleNameSet"} {
    if strings.Contains(js, needle) == false {
      t.Fatalf("schema-dts role fixture did not emit %q:\n%s", needle, js)
    }
  }
  schemaDtsRoleRunRuntimeCases(t, project, js)
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

func schemaDtsRoleRunRuntimeCases(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, js)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(schemaDtsRoleRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("schema-dts role runtime cases failed: %v\n%s", err, output)
  }
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

const schemaDtsRoleRuntimeRunner = `const mod = require("./main.cjs");

const capture = (task) => {
  try {
    task();
    return null;
  } catch (error) {
    return error;
  }
};

const validRecipe = {
  "@type": "Recipe",
  name: "Layer cake",
  author: {
    "@type": "Role",
    roleName: "chef",
    startDate: new Date("2026-06-11T00:00:00.000Z"),
    author: {
      "@type": "Person",
      name: "Alice",
      email: "alice@example.com",
    },
  },
  image: [
    "https://example.com/cake.jpg",
    {
      "@type": "LinkRole",
      roleName: "primary image",
      url: "https://example.com",
      image: "https://example.com/cake-2.jpg",
    },
  ],
  recipeIngredient: [
    "flour",
    {
      "@type": "Role",
      roleName: "main ingredient",
      recipeIngredient: "sugar",
    },
  ],
  recipeInstructions: [
    {
      "@type": "HowToStep",
      text: "Mix",
    },
    {
      "@type": "PerformanceRole",
      performanceIn: {
        "@type": "Event",
        name: "Bake-off",
        organizer: {
          "@type": "Organization",
          name: "Kitchen",
        },
      },
      recipeInstructions: {
        "@type": "HowToStep",
        text: "Bake",
      },
    },
  ],
  mainEntityOfPage: {
    "@type": "Article",
    headline: "Cake",
    author: {
      "@type": "Person",
      name: "Bob",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Recipe Lab",
    member: [
      {
        "@type": "Person",
        name: "Carol",
      },
    ],
  },
  aggregateRating: {
    "@type": "Rating",
    ratingValue: 5,
    bestRating: "5",
  },
  video: {
    "@type": "VideoObject",
    contentUrl: "https://example.com/cake.mp4",
    thumbnailUrl: "https://example.com/cake.png",
  },
  keywords: ["dessert", "cake"],
};

const valid = mod.validateRecipe(validRecipe);
if (valid.success !== true) {
  throw new Error("schema-dts Recipe shape failed validate: " + JSON.stringify(valid));
}

const invalidCases = [
  [
    "role without selected property",
    {
      "@type": "Recipe",
      author: {
        "@type": "Role",
        roleName: "chef",
      },
    },
  ],
  [
    "array branch with invalid primitive",
    {
      "@type": "Recipe",
      recipeIngredient: ["flour", 1],
    },
  ],
  [
    "nested object with invalid field",
    {
      "@type": "Recipe",
      author: {
        "@type": "Role",
        author: {
          "@type": "Person",
          email: 1,
        },
      },
    },
  ],
];

for (const [name, input] of invalidCases) {
  const result = mod.validateRecipe(input);
  if (result.success !== false) {
    throw new Error(name + " unexpectedly passed validate: " + JSON.stringify(result));
  }
}

if (mod.validateTimestamp(new Date("2026-06-11T00:00:00.000Z")).success !== true) {
  throw new Error("Date alias failed valid timestamp");
}
if (mod.validateTimestamp("2026-06-11T00:00:00.000Z").success !== false) {
  throw new Error("Date alias accepted a string timestamp");
}

if (mod.validateRoleNameSet(new Set(["chef", "writer"])).success !== true) {
  throw new Error("Set alias failed valid string set");
}
if (mod.validateRoleNameSet(new Set(["chef", 1])).success !== false) {
  throw new Error("Set alias accepted an invalid element");
}

if (mod.validateScoreMap(new Map([["quality", 5]])).success !== true) {
  throw new Error("Map alias failed valid score map");
}
if (mod.validateScoreMap(new Map([[1, "bad"]])).success !== false) {
  throw new Error("Map alias accepted invalid key/value types");
}
`
