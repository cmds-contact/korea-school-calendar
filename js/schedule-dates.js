/**
 * 학사일정 날짜 데이터 (중앙 관리 파일)
 *
 * 이 파일만 수정하면 모든 페이지에 반영됩니다:
 * - planner-2026.html (캘린더)
 * - markdown-export.html (마크다운 내보내기)
 *
 * 날짜 형식: [년, 월(0-11), 일]
 * 예: [2026, 0, 1] = 2026년 1월 1일
 *     [2026, 6, 19] = 2026년 7월 19일
 */

const SCHEDULE_DATES = {
    // 학교급 메타 정보
    schoolTypes: {
        elementary: { name: '초등학교', emoji: '🏫' },
        middle: { name: '중학교', emoji: '📚' },
        high: { name: '고등학교', emoji: '🎓' },
        university: { name: '대학교', emoji: '🏛️' }
    },

    // 2025학년도 (2025.3 ~ 2026.2)
    2025: {
        elementary: {
            semesters: [
                { name: '1학기', period: '3월 초 ~ 7월 하순', note: '3월 초 입학식·시업식' },
                { name: '2학기', period: '8월 중·하순 ~ 12월 말', note: '여름방학 후 개학식' }
            ],
            vacations: [
                { name: '여름방학', start: [2025, 6, 19], end: [2025, 7, 17], days: '약 30일' },
                { name: '겨울방학', start: [2025, 11, 22], end: [2026, 1, 28], days: '약 60일' }
            ]
        },
        middle: {
            semesters: [
                { name: '1학기', period: '3월 초 ~ 7월 중순', note: '4~5월 중간고사, 6월 기말고사' },
                { name: '2학기', period: '8월 중순 ~ 12월 말', note: '10월 중간고사, 11~12월 기말고사' }
            ],
            vacations: [
                { name: '여름방학', start: [2025, 6, 17], end: [2025, 7, 17], days: '약 32일' },
                { name: '겨울방학', start: [2025, 11, 27], end: [2026, 1, 28], days: '약 60일' }
            ]
        },
        high: {
            semesters: [
                { name: '1학기', period: '3월 초 ~ 7월 중순', note: '4~5월 중간고사, 6월 말~7월 초 기말고사' },
                { name: '2학기', period: '8월 중순 ~ 12월 말', note: '10월 중간고사, 11~12월 기말고사' }
            ],
            vacations: [
                { name: '여름방학', start: [2025, 6, 15], end: [2025, 7, 19], days: '약 36일' },
                { name: '겨울방학', start: [2025, 11, 20], end: [2026, 1, 28], days: '약 70일' }
            ],
            note: '3학년은 수능 후 조기 종료'
        },
        university: {
            semesters: [
                { name: '1학기 (봄학기)', period: '3월 초 ~ 6월 중순', note: '기말고사 후 종강' },
                { name: '2학기 (가을학기)', period: '9월 초 ~ 12월 중순', note: '기말고사 후 종강' }
            ],
            vacations: [
                { name: '여름방학', start: [2025, 5, 17], end: [2025, 7, 31], days: '약 75일' },
                { name: '겨울방학', start: [2025, 11, 22], end: [2026, 1, 28], days: '약 68일' }
            ],
            note: '계절학기 별도 운영'
        }
    },

    // 2026년 (캘린더 연도 기준: 2026.1 ~ 2026.12)
    2026: {
        elementary: {
            semesters: [
                { name: '1학기', period: '3월 초 ~ 7월 중순', note: '3월 초 입학식·시업식' },
                { name: '2학기', period: '8월 중순 ~ 12월 말', note: '여름방학 후 개학식' }
            ],
            vacations: [
                { name: '겨울방학 (전년도)', start: [2026, 0, 1], end: [2026, 1, 28], days: '약 59일' },
                { name: '여름방학', start: [2026, 6, 19], end: [2026, 7, 17], days: '약 30일' },
                { name: '겨울방학', start: [2026, 11, 22], end: [2026, 11, 31], days: '약 10일+' }
            ]
        },
        middle: {
            semesters: [
                { name: '1학기', period: '3월 초 ~ 7월 중순', note: '4~5월 중간고사, 6월 기말고사' },
                { name: '2학기', period: '8월 중순 ~ 12월 말', note: '10월 중간고사, 11~12월 기말고사' }
            ],
            vacations: [
                { name: '겨울방학 (전년도)', start: [2026, 0, 1], end: [2026, 1, 28], days: '약 59일' },
                { name: '여름방학', start: [2026, 6, 17], end: [2026, 7, 17], days: '약 32일' },
                { name: '겨울방학', start: [2026, 11, 27], end: [2026, 11, 31], days: '약 5일+' }
            ]
        },
        high: {
            semesters: [
                { name: '1학기', period: '3월 초 ~ 7월 중순', note: '4~5월 중간고사, 6월 말~7월 초 기말고사' },
                { name: '2학기', period: '8월 중순 ~ 12월 중순', note: '10월 중간고사, 11~12월 기말고사' }
            ],
            vacations: [
                { name: '겨울방학 (전년도)', start: [2026, 0, 1], end: [2026, 1, 28], days: '약 59일' },
                { name: '여름방학', start: [2026, 6, 15], end: [2026, 7, 18], days: '약 35일' },
                { name: '겨울방학', start: [2026, 11, 20], end: [2026, 11, 31], days: '약 12일+' }
            ],
            note: '3학년은 수능 후 조기 종료'
        },
        university: {
            semesters: [
                { name: '1학기 (봄학기)', period: '3월 초 ~ 6월 중순', note: '기말고사 후 종강' },
                { name: '2학기 (가을학기)', period: '9월 초 ~ 12월 중순', note: '기말고사 후 종강' }
            ],
            vacations: [
                { name: '겨울방학 (전년도)', start: [2026, 0, 1], end: [2026, 1, 28], days: '약 59일' },
                { name: '여름방학', start: [2026, 5, 20], end: [2026, 7, 31], days: '약 73일' },
                { name: '겨울방학', start: [2026, 11, 20], end: [2026, 11, 31], days: '약 12일+' }
            ],
            note: '계절학기 별도 운영'
        }
    },

    // 2027년 (캘린더용 - 겨울방학 연속)
    2027: {
        elementary: {
            vacations: [
                { name: '겨울방학', start: [2027, 0, 1], end: [2027, 1, 28], days: '약 59일' }
            ]
        },
        middle: {
            vacations: [
                { name: '겨울방학', start: [2027, 0, 1], end: [2027, 1, 28], days: '약 59일' }
            ]
        },
        high: {
            vacations: [
                { name: '겨울방학', start: [2027, 0, 1], end: [2027, 1, 28], days: '약 59일' }
            ]
        },
        university: {
            vacations: [
                { name: '겨울방학', start: [2027, 0, 1], end: [2027, 1, 28], days: '약 59일' }
            ]
        }
    }
};

/**
 * 유틸리티 함수들
 */

// 배열 날짜를 Date 객체로 변환
function toDate(dateArray) {
    return new Date(dateArray[0], dateArray[1], dateArray[2]);
}

// 배열 날짜를 "M/D" 문자열로 변환
function toDateString(dateArray) {
    return `${dateArray[1] + 1}/${dateArray[2]}`;
}

// 방학 기간 문자열 생성 (예: "7/19 ~ 8/17")
function getVacationPeriodString(vacation) {
    return `${toDateString(vacation.start)} ~ ${toDateString(vacation.end)}`;
}

// 특정 날짜가 방학인지 확인 (캘린더용)
function isVacationDate(date, schoolType, year) {
    const yearData = SCHEDULE_DATES[year];
    if (!yearData || !yearData[schoolType]) return false;

    const vacations = yearData[schoolType].vacations;
    return vacations.some(v => {
        const start = toDate(v.start);
        const end = toDate(v.end);
        return date >= start && date <= end;
    });
}

// 캘린더용 방학 데이터 생성 (Date 객체 포함)
function getCalendarVacations(year, schoolType) {
    const yearData = SCHEDULE_DATES[year];
    if (!yearData || !yearData[schoolType]) return [];

    return yearData[schoolType].vacations.map(v => ({
        name: v.name,
        start: toDate(v.start),
        end: toDate(v.end)
    }));
}

// 마크다운 내보내기용 데이터 생성
function getMarkdownData(year) {
    const yearData = SCHEDULE_DATES[year];
    if (!yearData) return null;

    const result = {};
    const schoolTypes = SCHEDULE_DATES.schoolTypes;

    for (const [key, meta] of Object.entries(schoolTypes)) {
        if (!yearData[key]) continue;

        const school = yearData[key];
        result[key] = {
            name: meta.name,
            emoji: meta.emoji,
            semesters: school.semesters || [],
            vacations: school.vacations.map(v => ({
                name: v.name,
                period: getVacationPeriodString(v),
                days: v.days
            })),
            note: school.note || null
        };
    }

    return result;
}

/**
 * 캘린더용 함수 (planner-2026.html)
 * 모든 연도의 방학 데이터를 통합해서 방학 여부 확인
 */
function isVacationForCalendar(date, schoolType) {
    const years = [2025, 2026, 2027];

    for (const year of years) {
        const yearData = SCHEDULE_DATES[year];
        if (!yearData || !yearData[schoolType]) continue;

        const vacations = yearData[schoolType].vacations;
        if (!vacations) continue;

        const isInVacation = vacations.some(v => {
            const start = toDate(v.start);
            const end = toDate(v.end);
            return date >= start && date <= end;
        });

        if (isInVacation) return true;
    }

    return false;
}
