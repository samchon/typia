# #1590 교차된 판별 union 검증 오판

## 상태

진행 중.

이슈: https://github.com/samchon/typia/issues/1590

브랜치: `fix/1590-intersection-union-validation`

## 현상

`PartyWithRole = (Individual | Corporation) & ({ partyRole: "customer" } | { partyRole: "other"; otherPartyRole: string })` 형태에서 `Individual` 분기에 `Date` 속성이 있으면, 유효한 `partyRole: "other"` 값이 `"customer"` 분기 오류로 실패한다.

## 확인한 원인

`MetadataSchema_intersects`와 `MetadataSchema_covers`가 native 타입을 `*MetadataNative` 포인터 동일성으로 비교하고 있었다.

교차 union 전개 과정에서 같은 `Date`라도 분기별 metadata 인스턴스가 다르면 서로 겹치지 않는 속성처럼 판단된다. 그 결과 object-union selector가 `birthDate instanceof Date`를 판별자처럼 사용하고, `Individual & customer` 분기를 먼저 선택해 `partyRole: "other"`를 거짓 실패로 보고한다.

## 구현 방향

- `packages/typia/native/core/schemas/metadata/MetadataSchema.go`
  - `MetadataSchema_intersects` native 비교를 `Name` 기준으로 바꾼다.
  - `MetadataSchema_covers` native 비교도 같은 기준으로 맞춘다.
- `packages/typia/native/cmd/ttsc-typia/intersection_union_validation_transform_test.go`
  - 이슈 재현 fixture를 transform 후 Node로 실행한다.
  - `createIs`, `createValidate`, `createAssert`, direct `validate`가 유효한 `Individual & other` 값을 통과시키는지 확인한다.
  - `Individual/Corporation`과 `customer/other` branch 조합이 모두 통과하는지 확인한다.
  - invalid `other` 값이 `"customer"` false positive를 내지 않는지 확인한다.
  - `Date` 및 `Uint8Array` 공유 native 속성이 branch-unique 속성보다 앞에 있을 때도 오른쪽 branch가 통과하는지 확인한다.
- `packages/typia/native/core/programmers/helpers/union_predicator_skips_shared_native_names_test.go`
  - shared native 속성이 `UnionPredicator.Object`의 discriminator로 선택되지 않는지 직접 확인한다.
  - 태그가 다른 `Uint8Array` metadata도 runtime native check와 동일하게 `Name` 기준으로 겹친다고 본다.
- `packages/typia/test/metadata/schema/metadata_schema_intersects_native_names_test.go`
  - 서로 다른 metadata 인스턴스의 `Date` native가 intersect 되는지 단위 테스트한다.
- `packages/typia/test/metadata/schema/metadata_schema_covers_native_names_test.go`
  - 서로 다른 metadata 인스턴스의 `Date` native가 cover 되는지 단위 테스트한다.
- `packages/typia/test/internal/testutil/helpers.go`
  - native metadata fixture helper를 공용화한다.
- `packages/typia/package.json`
  - native 소스 변경이므로 dev version을 올린다.

## 검증 계획

- `go test ./cmd/ttsc-typia -run TestIntersectionUnionValidationTransform -count=1 -v`
- `go test ./metadata/schema -run TestMetadataSchemaIntersectsPrimitives -count=1 -v`
- `go test ./core/programmers/helpers -run TestUnionPredicatorSkipsSharedNativeNames -count=1 -v` from `packages/typia/native`
- `pnpm format`
- `pnpm run format:go`
- `go test ./cmd/ttsc-typia -count=1`
- `go test ./... -count=1` from `packages/typia/native`
- `go test ./... -count=1` from `packages/typia/test`
- PR 생성 후 Research Review Round와 GitHub CI를 통과해야 한다.

## 위험 지점

native 이름 비교로 바꾸면 같은 이름의 native metadata가 같은 타입으로 취급된다. `MetadataSchema_merge`는 이미 native를 `Name` 기준으로 dedupe하고 있으므로 동일한 기준으로 정렬되는 변화다.

object-union selector가 더 보수적으로 fallback할 수 있다. 이 경우 성능은 일부 떨어질 수 있으나, 잘못된 branch를 선택해 false positive를 내는 것보다 정확성이 우선이다.
