const response = await fetch('./data/data.json');
const data = await response.json()

/* active 페이지에 끝 날짜를 최근 날짜로 지정해줌 */
document.getElementById('date_to').value = new Date().toISOString().slice(0,10);

//데이터 가져오기
let dataList = data;
//데이터 날짜별로 정렬
dataList.sort((a,b)=>{
    if(a.date < b.date) return 1;
    if(a.date > b.date) return -1;
    return 0
})
/* 검색 버튼을 누를 때 동작하는 함수 */
function search() {
    const category = document.getElementById('active_list').value;
    const dateFrom = new Date(document.getElementById('date_from').value);
    const dateTo = new Date(document.getElementById('date_to').value);
    const activeContainer = document.getElementById('active_container')

    const filteredData = dataList.filter(item => {
        const isCategoryMatch = category === 'default' || category === item.category;
        const isDateInRange = dateFrom <= new Date(item.date) && new Date(item.date) <= dateTo;
        return isCategoryMatch && isDateInRange;
    })
    if (filteredData.length > 0) {
        const resultHTML = filteredData.map(item => {
            return `
            <div class="active_item">
                <span class="activity_date">${item.date}</span>
                <span class="activity_category">${item.category}</span>
                <div class="activity_name">${item.name}</div>
                <div class="activity_desc" style="width:80%">${item.description}</div>
            </div>`;
        }).join('');
        activeContainer.innerHTML = resultHTML;
    } else {
        activeContainer.innerHTML = '<p>검색 결과가 없습니다.</p>';
    }
}
// document.getElementsByClassName("practice_list").innerHTML;
window.onload = function(){
    search(); //기본적으로 모든 활동을 다 보여줌
    document.getElementById('filter_apply').addEventListener('click', search); //클릭시 필터링 시작
}