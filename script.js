
    (function() {
      // ==========================================================
      // [사용자 설정 영역] 
      // 깃허브나 서버에 업로드할 때, 실제 가지고 계신 사진 파일명 목록을
      // 아래 리스트에 똑같이 적어주셔야 합니다. (확장자 제외, YYYY.MM 형식)
      // * 수정: 이제 'text' 필드에 사진에 대한 설명을 적을 수 있습니다.
      // ==========================================================
      const DATA_CONFIG = {
        // assets/images/gallery 폴더에 들어갈 사진 파일명들
        // id: "파일명" (예: 2015.11)
        // text: "사진 아래에 들어갈 설명 문구"
        galleryImages: [
          { id: "2015.11", text: "첫 만남, 첫 데이트" },
          { id: "2015.12", text: "부처님께 오래 가도록 기원" },
          { id: "2016.01", text: "첫 여행은 전주!" },
          { id: "2016.05", text: "뭘 봐" },
          { id: "2016.06", text: "꽃 선물 최고" },
          { id: "2016.07", text: "하늘 공원 최고시다" },
          { id: "2016.12", text: "파도가 엄청 났던 속초" },
          { id: "2017.01", text: "강남 데이트" },
          { id: "2017.04", text: "첫 공연 관람" },
          { id: "2017.05", text: "수원 첫 방문, 이렇게 자주 가게 될 줄이야" },
          { id: "2017.06", text: "장미없는 장미축제" },
          { id: "2017.07", text: "영서와 처음이자 마지막 곱창" },
          { id: "2017.08", text: "벨루가는 생각보다 큽니다" },
          { id: "2017.09", text: "서울에 이런 곳이" },
          { id: "2017.10", text: "까불면 안되겠다" },
          { id: "2017.11", text: "이태원 나들이" },
          { id: "2017.12", text: "구미 촌놈, 제야의 종소리 실물로 봄" },
          { id: "2018.01", text: "첫 일본 여행, 돌아가는 길에 영서 운 건 안 비밀" },
          { id: "2018.02", text: "수제 맥주집, 맛난데 비삼" },
          { id: "2018.03", text: "동굴 들어가기 전에 기분 좋음" },
          { id: "2018.04", text: "서울 둘레길 첫 경험" },
          { id: "2018.05", text: "구미 폭포, 생각보다 추움" },
          { id: "2018.06", text: "어디더라" },
          { id: "2018.07", text: "교토 은각사, 찍고 넘 더워서 호텔 직행" },
          { id: "2018.08", text: "남원 별구경" },
          { id: "2018.09", text: "첫 볼링 대결" },
          { id: "2018.10", text: "첫 놀이 공원" },
          { id: "2018.11", text: "같은 학교 출신인데, 회기 파전집은 처음 같이 가봄" },
          { id: "2018.12", text: "전설은 전설일뿐" },
          { id: "2019.01", text: "첫 서커스 공연, 여러분 쿠자 꼭 보십쇼" },
          { id: "2019.02", text: "새우깡 주다가 손 물릴 뻔함" },
          { id: "2019.03", text: "왜 잘랐는지 물어보지 마세요. 이때 훈련소 갈때 아님" },
          { id: "2019.05", text: "레이싱 본능의 시작" },
          { id: "2019.06", text: "수원 만두집… 전설의 시작" },
          { id: "2019.08", text: "서울숲 나들이" },
          { id: "2019.10", text: "영서 어학연수 가는 날, 한 반년 못 봤슈" },
          { id: "2019.11", text: "영서 어햑 연수 기간, 머리는 왜 짧았더라" },
          { id: "2020.01", text: "영서 어햑 연수 기간 2, 머리는 왜 짧았더라" },
          { id: "2020.09", text: "한국에 돌아온 걸 환영해 영서야!" },
          { id: "2020.10", text: "생각보다 맛없었음" },
          { id: "2020.11", text: "북한산 첫 등산" },
          { id: "2020.12", text: "순천 꼭 가십쇼 2번 가십쇼" },
          { id: "2021.02", text: "수원은 올 때 마다 좋아요" },
          { id: "2021.04", text: "수원에서 대차게 싸우고 찍은 사진" },
          { id: "2021.05", text: "봄 봄 봄" },
          { id: "2021.06", text: "환상의 나라로 오세요~, 영서 있음" },
          { id: "2021.07", text: "경제권은 영서에게 있다" },
          { id: "2021.08", text: "성수 나들이" },
          { id: "2021.10", text: "추천 맛집, 덕수궁 리에제 와플" },
          { id: "2021.11", text: "순천 꼭 가십쇼 2번 가십쇼" },
          { id: "2022.03", text: "처음으로 고양이에게 빠진 날. 고양이 별로 간 진이" },
          { id: "2022.04", text: "또 수원임" },
          { id: "2022.07", text: "놀이 공원은 경주가 낫습니다" },
          { id: "2022.08", text: "그늘져서 좋았던 걷기 대회" },
          { id: "2022.09", text: "스타벅스 리저브드 체험" },
          { id: "2022.10", text: "독립기념관 앞의 호두과자집이 찐입니다" },
          { id: "2022.11", text: "예쁘잖아요" },
          { id: "2022.12", text: "현대 백화점 첫 방문" },
          { id: "2023.01", text: "국립박물관 첫 방문" },
          { id: "2023.02", text: "금을 만질 운명이었던 거지" },
          { id: "2023.03", text: "첫 대구 여행" },
          { id: "2023.05", text: "중랑구 봄 나들이" },
          { id: "2023.06", text: "두물머리는 핫도그임" },
          { id: "2023.07", text: "응급실 다녀온 거 자랑" },
          { id: "2023.08", text: "전설의 시작, 라라면가" },
          { id: "2023.10", text: "정령치에는 차없으면 가지 마십쇼" },
          { id: "2023.11", text: "원신 이벤트 참석, 가주님 이쪽 보세요" },
          { id: "2024.02", text: "일본 못 가서 니지모리 방문" },
          { id: "2024.03", text: "창의력 대장" },
          { id: "2024.05", text: "시립대 여전하더라구요" },
          { id: "2024.06", text: "피시방에 먹으러 감" },
          { id: "2024.07", text: "문방구 털어서 신남" },
          { id: "2024.08", text: "꼬양이 꼬시는 중" },
          { id: "2024.10", text: "모든 게 좋았던 제주도 여행" },
          { id: "2024.11", text: "이땐 몰랐지 여기 살게될 줄" },
          { id: "2025.01", text: "가전 계약! 아직도 갚고 있습니다" },
          { id: "2025.02", text: "인기 폭발" },
          { id: "2025.03", text: "군항제 갔는데, 못 들어가서 아쉬워서 한장" },
          { id: "2025.04", text: "침대 계약! 이건 다 갚았습니다" },
          { id: "2025.05", text: "동생이 먼저 닥터 리가 될 줄이야" },
          { id: "2025.06", text: "진짜 가족이 된 날" },
          { id: "2025.08", text: "새 가족과의 첫 만남" },
          { id: "2025.09", text: "3가족 거실에서 평화롭게 낮잠 중" },
          { id: "2025.11", text: "스플렌더 중독의 시작" },
          { id: "2025.12", text: "첫 집에서 본 첫 눈의 흔적" },
          { id: "2026.02", text: "부부가 될 장소, 맛은 꽤 괜찮아요" }
        ]
      };
      
      const book = document.getElementById("book");
      const pages = Array.from(document.querySelectorAll(".page"));
      const barFill = document.getElementById("barFill");
      const yearCounter = document.getElementById("yearCounter");
      const finalCopy = document.getElementById("finalCopy");
      const bottomNav = document.getElementById("bottomNav");
      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");
      const photoStack = document.getElementById("photoStack");
      const slotPhoto = document.getElementById("slotPhoto");
      const slotSpin = document.getElementById("slotSpin");
      const slotBarFill = document.getElementById("slotBarFill"); // 슬롯 퍼센트 바
      const slotCaption = document.getElementById("slotCaption"); // [NEW] 캡션 요소
      let currentPage = 1;

      // 설정된 리스트 가져오기
      const galleryPhotos = DATA_CONFIG.galleryImages;

      // [로딩 페이지 기능 수정]
      // 1. 연도별로 사진 그룹화
      const photosByYear = {};
      galleryPhotos.forEach(item => {
        const year = parseInt(item.id.split('.')[0]);
        if (!photosByYear[year]) photosByYear[year] = [];
        photosByYear[year].push(item);
      });

      // 2. 2015년부터 2년 단위(2015, 2017, ...)로 사진을 하나씩 랜덤 선택하여 생성
      const targetYears = [2015, 2017, 2019, 2021, 2023, 2025];
      
      targetYears.forEach(year => {
        const pool = photosByYear[year];
        if (pool && pool.length > 0) {
          // 해당 연도 사진들 중 랜덤 하나 선택
          const randomPick = pool[Math.floor(Math.random() * pool.length)];
          
          const div = document.createElement('div');
          div.className = 'photo';
          // ID를 loading_photo_2015 등 연도 기반으로 설정하여 로딩 루프에서 찾을 수 있게 함
          div.id = `loading_photo_${year}`;
          div.style.backgroundImage = `url(assets/images/gallery/${randomPick.id}.jpg)`;
          photoStack.appendChild(div);
        }
      });

      function updatePageStacking() {
        pages.forEach((page, index) => {
          const pageNum = index + 1;
          if (pageNum < currentPage) {
            page.style.zIndex = pageNum;
          } else {
            page.style.zIndex = pages.length - index;
          }
        });

        if (currentPage > 1) { bottomNav.classList.add('is-visible'); } 
        else { bottomNav.classList.remove('is-visible'); }

        if (currentPage === 2) { prevBtn.classList.add('is-hidden'); } 
        else { prevBtn.classList.remove('is-hidden'); }

        if (currentPage === pages.length) { nextBtn.classList.add('is-hidden'); } 
        else { nextBtn.classList.remove('is-hidden'); }
      }

      window.addEventListener("mousemove", (e) => {
        const x = e.clientX, y = e.clientY;
        const centerX = window.innerWidth / 2, centerY = window.innerHeight / 2;
        const rotX = -((y - centerY) / centerY) * 20, rotY = ((x - centerX) / centerX) * 20;
        book.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      });

      if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", (e) => {
          if (e.beta !== null && e.gamma !== null) {
            let rotX = (e.beta - 45) / 1.5, rotY = e.gamma / 1.5;
            rotX = Math.max(-20, Math.min(20, rotX));
            rotY = Math.max(-20, Math.min(20, rotY));
            book.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
          }
        });
      }

      let startTime = null;
      function loadingLoop(ts) {
        if (!startTime) startTime = ts;
        const progress = Math.min(1, (ts - startTime) / 5000); 
        if (barFill) barFill.style.width = (progress * 100) + "%";
        
        const currentYear = 2015 + Math.round(progress * 11);
        const photo = document.getElementById(`loading_photo_${currentYear}`);
        if (photo) photo.classList.add('is-in');

        if (yearCounter) {
          const boxes = yearCounter.querySelectorAll(".digit-box");
          const nextS = String(currentYear);
          boxes.forEach((box, i) => {
            const top = box.querySelector(".digit-top");
            const bot = box.querySelector(".digit-bot span");
            if (top.textContent !== nextS[i]) {
              top.textContent = nextS[i]; bot.textContent = nextS[i];
              box.classList.add("is-flip");
              setTimeout(() => box.classList.remove("is-flip"), 300);
            }
          });
        }

        if (progress < 1) requestAnimationFrame(loadingLoop);
        else {
          if (finalCopy) finalCopy.classList.add("is-on");
          setTimeout(() => { if (currentPage === 1) goNext(); }, 1500);
        }
      }


      function goNext() { 
        if (currentPage < pages.length) { 
          document.getElementById(`page${currentPage}`).classList.add("flipped"); 
          currentPage++; 
          setTimeout(() => {
            updatePageStacking(); 
          }, 400); 
        } 
      }
      
      function goPrev() { 
        if (currentPage > 1) { 
          currentPage--; 
          document.getElementById(`page${currentPage}`).classList.remove("flipped"); 
          updatePageStacking(); 
        } 
      }

      prevBtn.onclick = goPrev; 
      nextBtn.onclick = goNext;

      let startX = 0;
      window.addEventListener("touchstart", e => startX = e.touches[0].clientX);
      window.addEventListener("touchend", e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) { if (diff > 0) goNext(); else goPrev(); }
      });

      // Memory Slot Logic
      slotSpin.onclick = () => {
        // [안전장치] 만약 설정된 사진 리스트가 비어있다면 작동 중지
        if (!galleryPhotos || galleryPhotos.length === 0) {
            alert("사진 목록이 설정되지 않았습니다.");
            return;
        }

        slotSpin.disabled = true;
        slotSpin.innerText = "추억을 불러오는 중..."; // 버튼 문구 변경
        slotPhoto.classList.remove('is-on');
        slotCaption.innerText = ""; // 문구 초기화
        
        const duration = 1600, start = performance.now();
        const interval = setInterval(() => {
          const tempY = 2015 + Math.floor(Math.random()*11), tempM = Math.floor(Math.random()*12)+1;
          document.getElementById("slotYear").textContent = `${tempY} . ${String(tempM).padStart(2, '0')}`;
          
          if (performance.now() - start > duration) {
            clearInterval(interval);
            
            // 보유한 사진 리스트 중 랜덤 선택
            const pick = galleryPhotos[Math.floor(Math.random() * galleryPhotos.length)];
            const [y, m] = pick.id.split('.');
            
            document.getElementById("slotYear").textContent = `${y} . ${m}`;
            
            // 퍼센트 바 및 텍스트 업데이트
            const per = Math.round(((parseInt(y) - 2015) / 11) * 100);
            slotBarFill.style.width = per + "%";
            document.getElementById("slotPerText").textContent = per + "%";
            
            // 사진 로드 (경로 에러 시 처리는 css background 특성상 조용히 실패함)
            slotPhoto.style.backgroundImage = `url(assets/images/gallery/${pick.id}.jpg)`;
            slotPhoto.classList.add("is-on"); 

            // 설명 문구 표시
            slotCaption.innerText = pick.text || "";
            
            // 버튼 원복
            slotSpin.innerText = "추억 돌리기";
            slotSpin.disabled = false;
          }
        }, 50);
      };
      
      // =========================================
      // [추가] 시네마틱 애니메이션 시퀀스 (최종)
      // =========================================
      const envWrap = document.getElementById('envelopeWrap');
      const bookContainerElem = document.getElementById('bookContainer');
      const bgTextElem = document.getElementById('bgText');

      // 1. 시작하자마자 배경 문구가 스르륵 나타남
      setTimeout(() => {
        if(bgTextElem) bgTextElem.classList.add('show');
      }, 100);

      // 2. 문구가 완성될 즈음(1.2초 뒤), 봉투와 청첩장이 함께 위로 올라옴
      setTimeout(() => {
        if(envWrap) envWrap.classList.add('rise');
        if(bookContainerElem) bookContainerElem.classList.add('rise');
      }, 1200);

      // 3. 봉투가 다 올라오면(1.2초 소요) 거의 바로(0.2초 대기) 떨어짐
      setTimeout(() => {
        if(bgTextElem) {
          bgTextElem.classList.remove('show');
          bgTextElem.classList.add('fade-out');
        }
        if(envWrap) {
          envWrap.classList.remove('rise');
          envWrap.classList.add('drop');
        }
        
        // 봉투가 화면 밖으로 충분히 빠져나갔을 즈음 (0.6초 뒤) 팜플렛 확대 시작
        setTimeout(() => {
          if(bookContainerElem) bookContainerElem.classList.add('grow');
          
          // 팜플렛 원래 크기(100%)로 확대 완료 후 (0.8초 뒤) 로딩 실행 (아까 지웠던 코드가 여기서 실행됩니다!)
          setTimeout(() => {
            requestAnimationFrame(loadingLoop); 
            const envScreen = document.getElementById('envelope-screen');
            if(envScreen) envScreen.style.display = 'none';
          }, 800); 
          
        }, 600);
      }, 2600);

      updatePageStacking();
    })();
  