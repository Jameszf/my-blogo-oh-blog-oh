

window.onload = function() {
    const summaryArticles = document.getElementsByClassName("summary-article")
    const summaryContentDivs = document.getElementsByClassName("post_summary-div")

    for (let el of summaryArticles) {
	el.addEventListener("click", function() {
	    window.location.href = el.id
	})
    }

    console.log(window.innerWidth)
    if (window.innerWidth < 600) {
	console.log("Small")
    }
}
