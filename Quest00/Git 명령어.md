# 1. Repository 생성하기
    Owner : 본인
    Repository name : 파일명 작성
    Description : 만들고자 하는 파일에 대한 간략 설명
    Public : 저장소 공개 / Private : 저장소 비공개
    Initialize this repository with a README : 저장소 설명을 위한 파일 생성 여부
    Add file → Upload files : 작업한 파일 업로드
    Drag additional files or click button 'choose your files' : 파일 선택
    check your uploaded files : 업로드한 파일 확인
    commit changes : 해당파일에 대한 간략 설명 및 파일 커밋 / 수정사항
    Settings : 설정
    GitHub Pages → Branch : master → save :  본인이 만든 웹페이지 저장 및 확인(Branch : master 세팅)

# 2. Git & GitHub
    Git : 분산형 버전 관리 시스템
    Github : Git을 기반으로 하는 데이터 저장소  
### Git
- 개념
  - 단순히 마지막 작업내용만을 저장 X, 전부 복제(clone)하는 방식
    ▶ 서버에 문제가 생겨도 해당 복제물로 다시 작업 가능
  - 데이터를 '연속되는 스냅샷'과 같은 개념으로 저장
  - 시간 순서대로 저장
<br>

- Git의 상태
  - Committed : 데이터가 로컬 DB에 안전하게 저장됐다는 것
  - Modified : 수정한 파일을 아직 로컬 DB에 커밋하지 않은 것
  - Staged : 현재 수정한 파일을 곧 커밋할 것이라고 표시한 상태
<br>

- Git의 장점
  - 변경사항에 대한 추적 가능 (수정,삭제,비교,되돌아가기 등)
  - Github을 통한 공유의 편리성

# 3. 용어정리
    - Commit : Git에 데이터가 저장되어 온 기록을 남기는 행위
    - Repository : 저장소
    - Remote Repository : 원격 저장소 서버에서 관리
    - Local Repository : 개인 컴퓨터 서버에 저장
    - Head :  현재 커밋한 소스코드
    - Branch : 코드를 여러개로 복사한 후, 이전의 코드와는 독립적으로 개발하는 것
    - Push : 로컬 저장소의 수정사항을 원격 저장소에 업로드 하는 행위
    - Pull : 원격 저장소에서 로컬 저장소로 다운로드 하는 행위
    - Work Tree : 폴더
    - Index : 커밋을 실행하기 전의 저장소와 작업 트리에 존재하는 공간, 모든 변경사항이 포함된 파일들의 집합 (=Staging area)
  
  # 4. 명령어정리
  **[ Git 명령어 ]**

    $ cd 지정폴더이름
    $ git init : 새로운 저장소 생성
    $ git clone 소스코드 : 저장소 복제/다운로드
    $ git add '파일명' : 선택파일 index에 추가
    $ git add -A : 수정된 파일들 index에 추가
    $ git add . : 모든 파일 index에 추가
    $ git commit -m '메시지' : 커밋 생성
    $ git status : 파일 상태 확인
    $ git branch : 브랜치 목록
    $ git branch 브랜치명 : 브랜치 생성
    $ git checkout -b 브랜치명 : 브랜치 생성 & 이동
    $ git checkout master : master branch로 되돌아옴
    $ git remote add origin 원격서버주소 : 클라우드 주소 등록 및 발행
    $ git remote remove 원격서버주소 : 클라우드 주소 삭제
    $ git branch -d 브랜치명 : 브랜치 삭제
    $ git push origin 브랜치명 : 만든 브랜치를 원격서버에 전송
    $ git push -u origin 브랜치명 : 새 브랜치를 원격저장소로 push
    $ git pull : 원격 저장소의 변경 내용이 현재 디렉토리에 가져와지고(fetch) 병합(merge)됨
    $ git pull origin 브랜치명 : 원격에 저장된 git 프로젝트의 현재 상태를 다운 + 현재 위치한 브랜치로 병합
    $ git merge 다른브랜치명 : 현재 브랜치에 다른 브랜치의 수정사항 병합
    $ git add 파일명 : 각 파일을 병합할 수 있음
    $ git diff 브랜치명 다른브랜치명 : 변경 내용 merge 전에 바뀐 내용을 비교할 수 있음
    $ git log : 현재 위치한 브랜치 커밋 내용 확인 및 식별자 부여됨
    $ git checkout --파일명 : 로컬의 변경 사항을 변경 전으로 되돌림
    $ git fetch origin : 원격에 저장된 git프로젝트의 현 상태를 다운로드
    $ git rm --cached '파일명' : 로컬 디렉토리는 유지, github에서만 삭제
    
  **[ CLI 명령어 ]**

    $ sudo : 관리자만 읽을 수 있는 파일 읽기
    $ ls : 파일보기
    $ al : 파일의 세부내용 확인
    $ cd : 디렉토리로 이동(=change directory)
    $ cd ~ : 홈 디렉토리
    $ cd / : 루트 디렉토리, 시스템 최상위 디렉토리
    $ cd . : 현재 디렉토리
    $ cd .. : 부모 디렉토리
    $ pwd : full 디렉토리 path확인
    $ clear : 터미널의 입력 내용들을 지워줌
    $ mv 파일이름 새로운파일이름 : 파일 이름 바꾸기
    $ rm 파일이름 : 파일 삭제
    $ rm -r 폴더이름 : 폴더 삭제
    $ explorer . : 현재 폴더를 windows파일 관리자에서 보기
    $ open . : 현재 폴더를 macOS finder에서 보기
    $ code . : 현재 폴더를 VS Code 에디터로 열기
