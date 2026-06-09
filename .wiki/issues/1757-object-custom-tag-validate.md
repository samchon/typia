# #1757 객체 대상 커스텀 태그 validate 누락

## 상태

구현 중. 이슈는 열려 있으며, 해결 PR이 머지되면 typia 13 정식 릴리스와 TypeScript-Go 정식 릴리스 타이밍 안내를 남기고 닫는다.

## 사실 확인

`MetadataTypeTagFactory`는 `target: "object"`와 문자열 `validate`를 정상 분석한다. `MetadataObject`도 `Tags [][]IMetadataTypeTag`를 보존하고 JSON 직렬화에도 태그를 싣는다.

누락 지점은 validator 생성 경로다. `CheckerProgrammer`와 `FeatureProgrammer`의 객체 함수 호출은 공유 객체 타입인 `MetadataObjectType`만 넘겨서, 참조별 태그를 담은 `MetadataObject.Tags`가 `Check_object`까지 도달하지 못한다. 배열 길이 태그는 `Check_array_length`가 `ICheckEntry.Conditions`로 만들어 `Atomist`를 통과시키므로 `is`, `assert`, `validate`가 같은 조건과 오류 리포팅을 공유한다.

## 구현안

객체 태그도 배열 태그와 같은 방식으로 처리한다.

- `iterate.Check_object_type_tags`를 추가해 `MetadataObject.Tags` 중 `Validate`가 있는 태그만 `ICheckEntry.Conditions`로 변환한다.
- `CheckerProgrammer`의 객체 참조 디코딩 경로에서 `MetadataObject`를 유지하고, 공유 객체 함수 호출 앞에 객체 태그 `Atomist` 조건을 붙인다.
- 태그가 달린 객체 유니언은 기존 공유 유니언 함수가 `MetadataObjectType`만 들고 있으므로 inline branch combiner로 처리해 참조별 태그를 잃지 않는다.
- `Check_object` 내부에 raw boolean 조건을 넣지 않는다. `validate`는 리포트 없이 `false`만 반환하면 `errors.length === 0` 때문에 성공으로 오판할 수 있다.

## 테스트 계획

- 네이티브 내부 테스트에서 임시 TypeScript 프로젝트를 만들고 `target: "object"` 커스텀 태그를 적용한다.
- `runTransform --output js` 결과에 `Object.keys($input).length >= 1` 계열 검증식이 들어가는지 확인한다.
- `runBuild` 후 Node로 산출물을 실행해 `createIs`와 `createValidate`가 빈 partial object를 거부하고, 한 속성이 있는 object를 통과시키는지 확인한다.
- `pnpm format`, `go test -tags typia_native_internal ./...`, 필요 시 `pnpm test:go`와 관련 TS 스위트를 실행한다.

## 위험 지점

객체 함수는 재귀와 공유를 위해 `MetadataObjectType` 기준으로 생성된다. 태그 조건을 공유 함수 안에 넣으면 같은 타입의 태그 없는 참조까지 오염될 수 있으므로, 반드시 `MetadataObject` 참조를 받는 외부 래퍼에서 검사해야 한다.
