//key : 926c3d85fe304904bc598f529c48dd62

let search = document.querySelector("#search_btn");
let input = document.querySelector("#search_news");

let main_cont = document.querySelector(".news_container");

let news = "World";

search.addEventListener("click", () => {
  news = input.value;
  main_cont.innerHTML='';
  getNews(news);
});

const showNews = (content) => {
  content.forEach((nz) => {
    let news_card =document.createElement('div');

    let image = nz.urlToImage;
    let link = nz.url;
    if(!image){
    //  image = 'http://www.nftitalia.com/wp-content/uploads/2017/07/news-1-1600x429.jpg'
   return;
    }
    let title = nz.title;
   // let des = nz.description;
    
    news_card.innerHTML =`
    <div class="card mb-3">
  <img src=${image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <a href=${link} target="_blank" class="btn btn-primary">Read full article
    </a>
  
  </div>
</div>
    `
    news_card.classList.add('news_card');
    main_cont.appendChild(news_card)
  });
};

const getNews = (news) => {
  fetch(
    `https://newsapi.org/v2/everything?q=${news}&sortBy=publishedAt&apiKey=926c3d85fe304904bc598f529c48dd62`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //news.innerHTML = data.news

      console.log(data.articles);
      showNews(data.articles);
    })
    .catch((error) => {
      console.error(error);
    });
};

getNews(news);
