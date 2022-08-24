
window.onload = (e) => {
    console.log("Hello World!")

    const articles = document.getElementsByClassName("summary-article")

    console.log(articles)

    for (let article of articles) {
	article.addEventListener("click", () => {
	    window.location.href = article.id
	})
    }
}
