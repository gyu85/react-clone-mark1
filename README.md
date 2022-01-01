# 리액트 클론 페이지
리액트 배운 걸 적용하는 클론 페이지 입니다.
하면서 업데이트 되면 여기 README.md에 업데이트 됩니다.

## 클론 페이지 내용
### 타겟 페이지
배달의 민족 - 배민 사장님 광장
https://ceo.baemin.com/

### 참고한 디자인 시스템
스포카 - https://bi.spoqa.com/

### 참고 개발 페이지
CAR - https://create-react-app.dev/

### 페이지 디테일
main

### 화면 breaking points
기준 구글 개발자 도구
tablet: 768px 이하
mobile : 425px 이하

## 작업 규칙
### 브랜치 규칙
header/YYMMDD/namimg
- 컴포넌트 추가 및 추가 : feature
- 이미 만들어진 부분에 대해서 develop : improve
- 이미 만들어진 부분에 대해서 bug fix : bugfix
- 관련 문서 관련 : readme

### Commit 규칙
- 작업 후 커밋 : "[YYMMDD] - 내용"

## Code conventions

### style-components
미디어 쿼리 적용
미디어 쿼리 적용 될 때 props를 받는 형식으로 진행

```javascript
const Title1 = styled.h1(props => ({
  color: 'red',
  [props.tablet]: {
    color: 'pink'
  },
  [props.mobile]: {
    color: 'violet'
  }
}));

const Main = () => {
  const {
    mq: { tablet, mobile }
  } = useThemeState();

  return (
    <Fragment>
      <Title1 tablet={tablet} mobile={mobile}>
        Main
      </Title1>
    </Fragment>
  );
};

```

#### heading tag 정의
heading 은 title로 정의

h1
``` javascript
const Title1 = styled.h1``
```

h2
``` javascript
const Title2 = styled.h2``
```

h3
``` javascript
const Title3 = styled.h3``
```

h4
``` javascript
const Title4 = styled.h4``
```

h5
``` javascript
const Title4 = styled.strong``
```
